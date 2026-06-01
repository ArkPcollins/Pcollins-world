import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum([
    "development",
    "production",
    "test"
  ]),

  PORT: z.string(),

  MONGO_URI: z.string(),

  JWT_SECRET: z.string(),

  JWT_REFRESH_SECRET: z.string(),

  REDIS_URL: z.string()
});

export type Env = z.infer<typeof envSchema>;