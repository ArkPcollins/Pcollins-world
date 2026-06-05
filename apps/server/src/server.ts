import http from "http";
import app from "./app.js";
import { env } from "./config/env.js"; // Added .js extension for consistency
import { connectDatabase } from "./config/database.js";
import { logger } from "./config/logger.js";
import { initSocket } from "./modules/realtime/socket/socket.server.js";
import { connectRedis } from "./config/redis.js";


const server = http.createServer(app);

const io = initSocket(server);

const startServer = async () => {
  try {
    connectRedis()
    await connectDatabase();

    server.listen(env.PORT, () => {
      logger.info(`Server and WebSockets running on port ${env.PORT}`);
    });
  } catch (error) {
    logger.error("Failed to start the server:", error);
    process.exit(1);
  }
};

startServer();


// implemenation of the server emit call
// import { emitEvent } from "../realtime/events/event.emitter";

// import { SocketEvents } from "../realtime/events/event.types";

// emitEvent(
//   SocketEvents.ORDER_UPDATED,
//   userId,
//   {
//     orderId,
//     status: "PAID"
//   }
// );