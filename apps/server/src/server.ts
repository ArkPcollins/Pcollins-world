import app from "./app";

import { env } from "./config/env";

import { connectDatabase }
from "./config/database";

import { logger }
from "./config/logger";

const startServer =
async () => {

  await connectDatabase();

  app.listen(
    env.PORT,
    () => {
      logger.info(
        `Server running on ${env.PORT}`
      );
    }
  );
};

startServer();