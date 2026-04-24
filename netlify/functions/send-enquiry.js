import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildMessage(data) {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const organization = escapeHtml(data.organization);
  const role = escapeHtml(data.role);
  const message = escapeHtml(data.message).replace(/\n/g, "<br />");

  return {
    subject: `New enquiry from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Organization: ${data.organization}`,
      `Role: ${data.role}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin: 0 0 16px;">New enquiry from ${name}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Message:</strong><br />${message}</p>
      </div>
    `,
  };
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }

  if (event.httpMethod !== "POST") {
    return json(405, { message: "Method not allowed" });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!gmailUser || !gmailAppPassword || !toEmail) {
    return json(500, {
      message:
        "Missing GMAIL_USER, GMAIL_APP_PASSWORD, or CONTACT_TO_EMAIL environment variables.",
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { message: "Invalid JSON body" });
  }

  const requiredFields = ["name", "email", "phone", "organization", "role", "message"];
  for (const field of requiredFields) {
    if (!payload[field] || String(payload[field]).trim().length === 0) {
      return json(400, { message: `${field} is required` });
    }
  }

  const { subject, text, html } = buildMessage(payload);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: gmailUser,
      to: toEmail,
      replyTo: payload.email,
      subject,
      text,
      html,
    });
  } catch (error) {
    const details = error instanceof Error ? error.message : "Unknown SMTP error";
    return json(502, {
      message: "Gmail SMTP rejected the request",
      details,
    });
  }

  return json(200, { message: "Enquiry sent successfully" });
}
