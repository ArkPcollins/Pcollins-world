import dotenv from "dotenv";

import { envSchema } from "../validators/env.validator";

dotenv.config();

const parsed = envSchema.safeParse(
  process.env
);

if (!parsed.success) {
  console.error(
    parsed.error.flatten().fieldErrors
  );

  process.exit(1);
}

export const env = parsed.data;