import express from 'express';
import healthRouter from "./health.route";
import { he } from 'zod/v4/locales';

const router = express.Router();

router.use("/health", healthRouter);

export default router