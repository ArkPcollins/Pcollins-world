import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { asyncHandler } from "@/utils/asyncHandler";
import { WalletController } from "./wallet.controller";

const router = Router()
const controller = new WalletController()

router.get("/", authenticate, asyncHandler(controller.getWallet));
router.post("/fund", authenticate, asyncHandler(controller.fundWallet));
router.post("/withdraw", authenticate, asyncHandler(controller.withdraw));
router.get("/transactions", authenticate, asyncHandler(controller.getTransactions));

export default router