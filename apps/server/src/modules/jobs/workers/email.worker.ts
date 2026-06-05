import { Worker } from "bullmq";

import { EmailService } from
"../../email/email.service";

const service =
  new EmailService();

new Worker(
  "email-queue",

  async(job)=>{

    await service.sendEmail(
      job.data.email,
      job.data.subject,
      job.data.html
    );

  }
);