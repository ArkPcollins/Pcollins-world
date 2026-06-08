import { AnalyticsService } from "./analytics.service";
import { apiResponse } from "../../utils/apiResponse";
export class AnalyticsController {
    service = new AnalyticsService();
    getPlatformMetrics = async (req, res) => {
        const metrics = await this.service.getPlatformMetrics();
        return apiResponse(res, true, "Platform metrics fetched", metrics);
    };
    getRevenueAnalytics = async (req, res) => {
        const { startDate, endDate } = req.query;
        const analytics = await this.service.getRevenueAnalytics(startDate ? new Date(startDate) : undefined, endDate ? new Date(endDate) : undefined);
        return apiResponse(res, true, "Revenue analytics fetched", analytics);
    };
    getProductAnalytics = async (req, res) => {
        const analytics = await this.service.getProductAnalytics();
        return apiResponse(res, true, "Product analytics fetched", analytics);
    };
    getUserAnalytics = async (req, res) => {
        const analytics = await this.service.getUserAnalytics();
        return apiResponse(res, true, "User analytics fetched", analytics);
    };
    getPropertyAnalytics = async (req, res) => {
        const analytics = await this.service.getPropertyAnalytics();
        return apiResponse(res, true, "Property analytics fetched", analytics);
    };
    getSavingsAnalytics = async (req, res) => {
        const analytics = await this.service.getSavingsAnalytics();
        return apiResponse(res, true, "Savings analytics fetched", analytics);
    };
}
