import mongoose from "mongoose";

import { env } from "./env";
import { logger } from "./logger";


export const connectDatabase =
  async (): Promise<void> => {
    try {
      await mongoose.connect(
        env.MONGO_URI
      );

      logger.info(
        "MongoDB connected"
      );
    } catch (error) {
      logger.error(error);

      process.exit(1);
    }
  };