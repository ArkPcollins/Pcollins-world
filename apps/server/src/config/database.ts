import mongoose from "mongoose";

import { env } from "./env";
import { logger } from "./logger";


export const connectDatabase =
  async (): Promise<void> => {
    try {
      await mongoose.connect(
        env.MONGO_URI
      );

      await mongoose?.connection?.db.collection("transactions").dropIndex("reference_1");
       console.log("✅ Successfully dropped old transaction index");

      logger.info(
        "MongoDB connected"
      );
    } catch (error) {
      logger.error(error);

      process.exit(1);
    }
  };