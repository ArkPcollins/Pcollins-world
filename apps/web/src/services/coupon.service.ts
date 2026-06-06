import { api } from "@/lib/axios";

export class CouponService {
  static async validate(code: string) {
    const response = await api.post(
      "/coupons/validate",

      { code }
    );

    return response.data;
  }
}
