import { MailService } from '@sendgrid/mail';
import { ContactMessage } from '@shared/schema';

// Initialize SendGrid with API key from environment variables
const mailService = new MailService();

// We'll set the API key at runtime to ensure it's available
function getMailService() {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is required for email functionality');
  }
  
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
  return mailService;
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Send an email notification using SendGrid
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    // Get the mail service with API key set
    const service = getMailService();
    
    await service.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

/**
 * Send notification email when a new contact form submission is received
 */
export async function sendContactNotification(contactMessage: ContactMessage): Promise<boolean> {
  const adminEmail = 'kayodeola47@gmail.com'; // Replace with your email
  
  const emailParams: EmailParams = {
    to: adminEmail,
    from: 'noreply@portfolio.com', // This should be a verified sender in SendGrid
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