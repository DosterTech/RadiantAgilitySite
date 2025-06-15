import { MailService } from '@sendgrid/mail';
import type { Inquiry } from '@shared/schema';

const mailService = new MailService();

if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not provided. Email notification skipped.');
    return false;
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendInquiryNotification(inquiry: Inquiry): Promise<boolean> {
  const emailBody = `
New Contact Request from ${inquiry.name}

Name: ${inquiry.name}
Email: ${inquiry.email}
Subject: ${inquiry.subject}

Message:
${inquiry.message}

Submitted: ${new Date(inquiry.createdAt).toLocaleString()}
  `.trim();

  const htmlBody = `
    <h2>New Contact Request from ${inquiry.name}</h2>
    <p><strong>Name:</strong> ${inquiry.name}</p>
    <p><strong>Email:</strong> ${inquiry.email}</p>
    <p><strong>Subject:</strong> ${inquiry.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${inquiry.message.replace(/\n/g, '<br>')}</p>
    <p><em>Submitted: ${new Date(inquiry.createdAt).toLocaleString()}</em></p>
  `;

  return await sendEmail({
    to: 'radiantagility@gmail.com',
    from: 'noreply@radiantagility.tech',
    subject: `New Contact Request from ${inquiry.name}`,
    text: emailBody,
    html: htmlBody,
  });
}