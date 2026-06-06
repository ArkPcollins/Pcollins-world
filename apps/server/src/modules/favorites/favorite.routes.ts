import {Router} from 'express'
import { authenticate } from '../middleware/auth.middleware';
import { asyncHandler } from '@/utils/asyncHandler';
import { FavoriteController } from './favorite.controller';

const router = Router()
const controller = new FavoriteController()

router.post("/:propertyId", authenticate, asyncHandler(controller.addFavorite));
router.delete("/:propertyId", authenticate, asyncHandler(controller.removeFavorite));
router.get("/", authenticate, asyncHandler(controller.getMyFavorites));
router.get("/:propertyId/check", authenticate, asyncHandler(controller.isFavorited));

export default router