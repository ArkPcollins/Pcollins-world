// review.controller.ts
import { Response } from "express";
import { apiResponse } from "@/utils/apiResponse";
import { ReviewService } from "./review.service";

export class ReviewController {
  private service = new ReviewService();

  createReview = async (req: any, res: Response) => {
    const review = await this.service.createReview(
      req.user.userId,
      req.params.productId,
      req.body.rating,
      req.body.comment
    );
    return apiResponse(res, true, "Review created", review);
  };

  getProductReviews = async (req: any, res: Response) => {
    const reviews = await this.service.getProductReviews(req.params.productId);
    return apiResponse(res, true, "Reviews fetched", reviews);
  };

  updateReview = async (req: any, res: Response) => {
    const review = await this.service.updateReview(
      req.params.id,
      req.user.userId,
      req.body.rating,
      req.body.comment
    );
    return apiResponse(res, true, "Review updated", review);
  };

  deleteReview = async (req: any, res: Response) => {
    await this.service.deleteReview(req.params.id, req.user.userId);
    return apiResponse(res, true, "Review deleted");
  };
}