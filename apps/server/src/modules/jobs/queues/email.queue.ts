import { Queue } from "bullmq";
import { createRedisConnection } from "../../../config/redis";


export const emailQueue =
  new Queue(
    "email-queue",
    {
      connection: createRedisConnection(),
      defaultJobOptions: {
        attempts: 3, // Best practice: retry failed emails
        backoff: {
          type: "exponential",
          delay: 1000,
        },
      },
    }
  );


//   sample to add jobs
// await emailQueue.add(
//     "send-email",
//     {
//       email,
//       subject,
//       html
//     }
//   );