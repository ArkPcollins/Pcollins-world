import { Router } from "express";

import { KYCController } from "./kyc.controller";


import { asyncHandler } from "../../utils/asyncHandler";
import { authenticate } from "../middleware/auth.middleware";
import { UserRole } from "../shared/enums/role.enum";
import { authorize } from "../middleware/role.middleware";

const router = Router();

const controller = new KYCController();

router.post(
  "/submit",
  authenticate,
  asyncHandler(controller.submit)
);

router.patch(
  "/:id/review",
  authenticate,
  authorize(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  asyncHandler(controller.review)
);

export default router;