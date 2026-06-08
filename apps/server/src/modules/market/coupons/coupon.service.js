import { CouponModel } from "./coupon.model";
import { ApiError } from "../../../utils/ApiError";
export class CouponService {
    async validateCoupon(code, orderAmount) {
        const coupon = await CouponModel.findOne({ code });
        if (!coupon || !coupon.isActive) {
            throw new ApiError(400, "Invalid coupon");
        }
        if (coupon.expiresAt && coupon.expiresAt < new Date()) {
            throw new ApiError(400, "Coupon expired");
        }
        if (orderAmount < coupon.minOrderAmount) {
            throw new ApiError(400, "Order too small for coupon");
        }
        if (coupon.maxUsage &&
            coupon.usedCount >= coupon.maxUsage) {
            throw new ApiError(400, "Coupon exhausted");
        }
        let discount = 0;
        if (coupon.type === "FIXED") {
            discount = coupon.value;
        }
        else {
            discount = (orderAmount * (coupon.value ?? 1)) / 100;
        }
        return {
            discount,
            finalAmount: orderAmount - discount
        };
    }
    async incrementUsage(code) {
        return CouponModel.updateOne({ code }, { $inc: { usedCount: 1 } });
    }
}
