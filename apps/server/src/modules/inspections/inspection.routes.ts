import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { asyncHandler } from "@/utils/asyncHandler";
import { authorize } from "../middleware/role.middleware";
import { UserRole } from "@/enum/role.enum";
import { InspectionController } from "./inspection.controller";

const router = Router()
const controller = new InspectionController()

router.post("/:propertyId/book", authenticate, asyncHandler(controller.bookInspection));
router.patch("/:id/status", authenticate, authorize(UserRole.ADMIN), asyncHandler(controller.updateStatus));
router.get("/my", authenticate, asyncHandler(controller.getMyInspections));
router.get("/property/:propertyId", authenticate, authorize(UserRole.ADMIN, UserRole.AGENT), asyncHandler(controller.getPropertyInspections));

export default router