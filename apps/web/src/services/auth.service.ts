import { api } from "../lib/axios";

export class AuthService {
  static async register(payload: any) {
    const response = await api.post(
      "/auth/register",

      payload
    );

    return response.data;
  }
  static async login(payload: any) {
    const response = await api.post(
      "/auth/login",

      payload
    );

    return response.data;
  }
  static async forgotPassword(payload: any) {
    const response = await api.post(
      "/auth/login",

      payload
    );

    return response.data;
  }
  static async me() {
    const response = await api.get("/auth/me");

    return response.data;
  }
  static async logout() {
    const response = await api.post("/auth/logout");

    return response.data;
  }
}
