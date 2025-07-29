import { MailService } from '@sendgrid/mail';
import type { Inquiry } from '@shared/schema';
import { sendEmailSMTP } from './emailSMTP';

const mailService = new MailService();

if (process.env.SENDGRID_API_KEY) {
  // Clean the API key by removing any quotes and whitespace
  const cleanApiKey = process.env.SENDGRID_API_KEY.trim().replace(/['"]/g, '');
  mailService.setApiKey(cleanApiKey);
  console.log(`SendGrid API key configured (length: ${cleanApiKey.length}, starts with: ${cleanApiKey.substring(0, 3)})`);
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

  // Try SendGrid Web API first
  try {
    console.log(`Attempting to send email via SendGrid API from ${params.from} to ${params.to}`);
    const response = await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    console.log('Email sent successfully via API:', response[0].statusCode);
    return true;
  } catch (error: any) {
    console.error('SendGrid API error:', error);
    if (error.response) {
      console.error('SendGrid API response:', error.response.body);
      
      // If credits exceeded, try SMTP relay
      if (error.response.body?.errors?.[0]?.message?.includes('Maximum credits exceeded')) {
        console.log('Credits exceeded, trying SMTP relay...');
        return await sendEmailSMTP(params);
      }
    }
    
    // Try SMTP as fallback for other errors
    console.log('API failed, trying SMTP relay...');
    return await sendEmailSMTP(params);
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