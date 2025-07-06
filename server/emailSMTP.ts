import nodemailer from 'nodemailer';

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

// SMTP configuration for SendGrid
const createSMTPTransporter = () => {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY not configured');
  }

  return nodemailer.createTransporter({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'apikey', // This is literal 'apikey'
      pass: process.env.SENDGRID_API_KEY // Your SendGrid API key
    }
  });
};

export async function sendEmailSMTP(params: EmailParams): Promise<boolean> {
  try {
    const transporter = createSMTPTransporter();
    
    console.log(`Sending email via SMTP from ${params.from} to ${params.to}`);
    
    const mailOptions = {
      from: params.from,
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('SMTP email sent successfully:', result.messageId);
    return true;
    
  } catch (error) {
    console.error('SMTP email error:', error);
    return false;
  }
}