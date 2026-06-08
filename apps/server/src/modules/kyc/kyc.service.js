import { KYCModel, KYCStatus } from "./kyc.model";
import { ApiError } from "../../utils/ApiError";
export class KYCService {
    async submitKyc(userId, data) {
        const existing = await KYCModel.findOne({ userId });
        if (existing && existing.status === KYCStatus.PENDING) {
            throw new ApiError(400, "KYC already pending");
        }
        return KYCModel.create({
            userId,
            ...data,
            status: KYCStatus.PENDING
        });
    }
    async reviewKyc(kycId, status, adminId, reason) {
        const kyc = await KYCModel.findById(kycId);
        if (!kyc)
            throw new ApiError(404, "KYC not found");
        kyc.status = status;
        kyc.reviewedBy = adminId;
        kyc.rejectionReason = reason;
        await kyc.save();
        return kyc;
    }
}
