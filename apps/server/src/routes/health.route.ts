import { Router } from "express";

const router = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check
 */
router.get(
  "/health",
  (_, res) => {
    res.json({
      status: "OK"
    });
  }
);

export default router;