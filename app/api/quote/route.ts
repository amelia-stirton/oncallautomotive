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

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
    } = body;

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

        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>

        <p><strong>Email:</strong> ${escapeHtml(email)}</p>

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