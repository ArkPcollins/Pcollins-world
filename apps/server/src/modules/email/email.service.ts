import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

export class EmailService {
  async sendEmail(
    to: string,
    subject: string,
    html: string
  ) {
    try {
      const response = await brevo.transactionalEmails.sendTransacEmail({
        sender: { 
          email: process.env.EMAIL_FROM! 
        },
        to: [
          { email: to }
        ],
        subject: subject,
        htmlContent: html,
      });

      return response;
    } catch (error) {
      throw new Error(`Brevo email failed: ${error instanceof Error ? error.message : error}`);
    }
  }
}
