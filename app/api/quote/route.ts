import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_LENGTHS = {
  name: 80,
  phone: 20,
  email: 100,
  location: 80,
  vehicle: 100,
  kilometres: 10,
  registration: 10,
  details: 1000,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const res = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY as string,
          response: token,
        }),
      }
    );

    const data = await res.json();

    console.log("reCAPTCHA verify response:", data);

    return data.success === true && data.score >= RECAPTCHA_SCORE_THRESHOLD;
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      location,
      vehicle,
      kilometres,
      registration,
      details,
      recaptchaToken,
    } = body;

    // Clean phone number for clickable tel: link
const phoneHref = phone.replace(/[^\d+]/g, "");

    // reCAPTCHA check
    if (typeof recaptchaToken !== "string" || recaptchaToken.length === 0) {
      return Response.json(
        { success: false, error: "Missing reCAPTCHA token" },
        { status: 400 }
      );
    }

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return Response.json(
        { success: false, error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const fields = {
      name,
      phone,
      email,
      location,
      vehicle,
      kilometres,
      registration,
      details,
    };

    // Required + type check
    for (const [key, value] of Object.entries(fields)) {
      if (typeof value !== "string" || value.trim().length === 0) {
        return Response.json(
          { success: false, error: `Missing field: ${key}` },
          { status: 400 }
        );
      }
    }

    // Length check
    for (const [key, value] of Object.entries(fields)) {
      const max = MAX_LENGTHS[key as keyof typeof MAX_LENGTHS];
      if (value.length > max) {
        return Response.json(
          { success: false, error: `${key} too long` },
          { status: 400 }
        );
      }
    }

    // Email format check
    if (!EMAIL_REGEX.test(email)) {
      return Response.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "On Call Automotive Website <notifications@oncallautomotive.com.au>",
      to: "info@oncallautomotive.com.au",
      replyTo: email,

      subject: `New Quote Request - ${escapeHtml(name)}`,

      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>

<p>
  <strong>Phone:</strong>
  <a href="tel:${phoneHref}">${escapeHtml(phone)}</a>
</p>
        <p>
  <strong>Email:</strong>
  <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
</p>
        <p><strong>Location:</strong> ${escapeHtml(location)}</p>

        <p><strong>Vehicle:</strong> ${escapeHtml(vehicle)}</p>

        <p><strong>Current kilometres:</strong> ${escapeHtml(kilometres)}</p>

        <p><strong>Registration number:</strong> ${escapeHtml(registration)}</p>

        <p><strong>Issue:</strong></p>
        <p>${escapeHtml(details).replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json({ success: false }, { status: 500 });
  }
}