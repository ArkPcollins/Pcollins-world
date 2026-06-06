// modules/market/reviews/review.service.ts
import { ReviewModel } from "./review.model";
import { ProductModel } from "../products/product.model";
import mongoose from "mongoose";

export class ReviewService {
  async createReview(userId: string, productId: string, rating: number, comment: string) {
    const product = await ProductModel.findById(productId);
    if (!product) throw new Error("Product not found");

    // Check if user already reviewed
    const existing = await ReviewModel.findOne({ userId, productId });
    if (existing) throw new Error("You have already reviewed this product");

    const review = await ReviewModel.create({
      userId,
      productId,
      rating,
      comment
    });

    // Update product rating
    await this.updateProductRating(productId);

    return review;
  }

  async getProductReviews(productId: string) {
    return ReviewModel.find({ productId })
      .populate("userId", "firstName lastName avatar")
      .sort({ createdAt: -1 });
  }

  async updateReview(reviewId: string, userId: string, rating?: number, comment?: string) {
    const review = await ReviewModel.findById(reviewId);
    if (!review) throw new Error("Review not found");
    if ((review?.userId?.toString() ?? "")!== userId) throw new Error("Unauthorized");

    if (rating) review.rating = rating;
    if (comment) review.comment = comment;
    await review.save();

    await this.updateProductRating(review?.productId?.toString() ?? "");

    return review;
  }

  async deleteReview(reviewId: string, userId: string) {
    const review = await ReviewModel.findById(reviewId);
    if (!review) throw new Error("Review not found");
    if (review?.userId?.toString() ?? "" !== userId) throw new Error("Unauthorized");

    const productId = review?.productId?.toString() ?? "";
    await review.deleteOne();

    await this.updateProductRating(productId);

    return true;
  }

  private async updateProductRating(productId: string) {
    const result = await ReviewModel.aggregate([
      { $match: { productId: new mongoose.Types.ObjectId(productId) } },
      { $group: { _id: "$productId", avgRating: { $avg: "$rating" }, total: { $sum: 1 } } }
    ]);

    const avgRating = result[0]?.avgRating || 0;
    const totalReviews = result[0]?.total || 0;

    await ProductModel.findByIdAndUpdate(productId, {
      rating: Math.round(avgRating * 10) / 10,
      totalReviews
    });
  }
}