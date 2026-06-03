import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";
import { requestLogger } from "./middleware/request-logger.middleware";
import { errorMiddleware } from "./middleware/error.middleware";
import { notFoundMiddleware } from "./middleware/not-found.middleware";
import allRoutes from "./routes";

const app = express();

app.use(requestLogger);

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));

app.use(cors());

app.use(compression());

app.use(express.json());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/v1", allRoutes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;
