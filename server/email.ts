import nodemailer from 'nodemailer';
import { ContactMessage } from '@shared/schema';
import dotenv from 'dotenv';
dotenv.config();
interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

// Initialize the Nodemailer transporter
function getTransporter() {
  if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
    throw new Error('EMAIL_USERNAME and EMAIL_PASSWORD are required for email functionality');
  }

  return nodemailer.createTransport({
    service: 'gmail', // or use "smtp.zoho.com", "smtp.mailtrap.io", etc.
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

/**
 * Send an email using Nodemailer
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: params.from,
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });

    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Nodemailer email error:', error);
    return false;
  }
}

/**
 * Send notification email when a new contact form submission is received
 */
export async function sendContactNotification(contactMessage: ContactMessage): Promise<boolean> {
  const adminEmail = 'kayodeola47@gmail.com';
  const senderEmail = process.env.EMAIL_USERNAME || 'kayodeola47@gmail.com'; // default fallback

  const emailParams: EmailParams = {
    to: adminEmail,
    from: senderEmail,
    subject: `New Contact Form Submission from ${contactMessage.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #4361ee;">New Contact Form Submission</h2>
        <p><strong>From:</strong> ${contactMessage.name}</p>
        <p><strong>Email:</strong> ${contactMessage.email}</p>
        ${contactMessage.subject ? `<p><strong>Subject:</strong> ${contactMessage.subject}</p>` : ''}
        <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #4361ee;">
          <p><strong>Message:</strong></p>
          <p>${contactMessage.message.replace(/\n/g, '<br>')}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #6c757d;">This email was sent automatically from your portfolio website.</p>
      </div>
    `
  };

  return await sendEmail(emailParams);
}
