import { contactPayloadSchema, normalizeContactPayload } from "@/lib/contact-schema";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactPayloadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  let data;
  try {
    data = normalizeContactPayload(parsed.data);
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Invalid email" },
      { status: 400 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.EMAIL_TO;
  const from = process.env.EMAIL_FROM;

  if (!host || !user || !pass || !to || !from) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Add SMTP and EMAIL_* variables to .env.local.",
      },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const lines = [
    `New quote request — Owen Scaffolding website`,
    ``,
    `Job type: ${data.jobType}`,
    `Job size: ${data.jobSize}`,
    `Location: ${data.location}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : `Email: (not provided)`,
  ];

  try {
    await transporter.sendMail({
      from,
      to,
      subject: `Quote request from ${data.name}`,
      text: lines.join("\n"),
      replyTo: data.email || undefined,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or call 07890 055319." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
