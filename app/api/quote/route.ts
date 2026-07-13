import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
from: "On Call Automotive Website <notifications@oncallautomotive.com.au>",
to: "info@oncallautomotive.com.au",
replyTo: email,

      subject: `New Quote Request - ${name}`,

      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Location:</strong> ${location}</p>

        <p><strong>Vehicle:</strong> ${vehicle}</p>

        <p><strong>Current kilometres:</strong> ${kilometres}</p>

        <p><strong>Registration number:</strong> ${registration}</p>

        <p><strong>Issue:</strong></p>
        <p>${details}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );

  }
}