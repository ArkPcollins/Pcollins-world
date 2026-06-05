import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),

  PORT: z.string(),

  MONGO_URI: z.string(),

  JWT_SECRET: z.string(),

  JWT_REFRESH_SECRET: z.string(),

  REDIS_URL: z.string(),
  CLOUDINARY_CLOUD_NAME: z.string(),
  CLOUDINARY_API_KEY: z.string(),
  CLOUDINARY_API_SECRET: z.string(),

  REDIS_HOST: z.string(),
  REDIS_PORT: z.string(),
  PAYSTACK_SECRET_KEY: z.string(),
  BREVO_API_KEY: z.string(),
  EMAIL_FROM: z.string(),
});

export type Env = z.infer<typeof envSchema>;
