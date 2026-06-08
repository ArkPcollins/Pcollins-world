import { AdminService } from "./admin.service";
import { apiResponse } from "../../utils/apiResponse";
export class AdminController {
    service = new AdminService();
    dashboardMetrics = async (req, res) => {
        const kyc = await this.service.dashboardMetrics();
        return apiResponse(res, true, "Dashboard metrics fetched", kyc);
    };
    getUsers = async (req, res) => {
        const kyc = await this.service.getUsers(req.query);
        return apiResponse(res, true, "KYC reviewed", kyc);
    };
    pendingKyc = async (req, res) => {
        const kyc = await this.service.pendingKyc();
        return apiResponse(res, true, "KYC reviewed", kyc);
    };
    monthlyRevenue = async (req, res) => {
        const kyc = await this.service.monthlyRevenue();
        return apiResponse(res, true, "KYC reviewed", kyc);
    };
    topProducts = async (req, res) => {
        const kyc = await this.service.topProducts();
        return apiResponse(res, true, "KYC reviewed", kyc);
    };
    totalSavings = async (req, res) => {
        const kyc = await this.service.totalSavings();
        return apiResponse(res, true, "KYC reviewed", kyc);
    };
}
