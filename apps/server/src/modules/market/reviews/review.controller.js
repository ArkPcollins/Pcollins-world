import { ReviewService } from "./review.service";
import { apiResponse } from "../../../utils/apiResponse";
export class ReviewController {
    service = new ReviewService();
    createReview = async (req, res) => {
        const review = await this.service.createReview(req.user.userId, req.params.productId, req.body.rating, req.body.comment);
        return apiResponse(res, true, "Review created successfully", review);
    };
    getProductReviews = async (req, res) => {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        const reviews = await this.service.getProductReviews(req.params.productId, page, limit);
        return apiResponse(res, true, "Reviews fetched", reviews);
    };
    updateReview = async (req, res) => {
        const review = await this.service.updateReview(req.params.id, req.user.userId, req.body.rating, req.body.comment);
        return apiResponse(res, true, "Review updated", review);
    };
    deleteReview = async (req, res) => {
        const isAdmin = req.user.role === "ADMIN" || req.user.role === "SUPER_ADMIN";
        await this.service.deleteReview(req.params.id, req.user.userId, isAdmin);
        return apiResponse(res, true, "Review deleted successfully");
    };
    getMyReviews = async (req, res) => {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        const reviews = await this.service.getUserReviews(req.user.userId, page, limit);
        return apiResponse(res, true, "My reviews fetched", reviews);
    };
}
