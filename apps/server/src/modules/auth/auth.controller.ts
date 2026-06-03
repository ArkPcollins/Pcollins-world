import { Request, Response } from "express";

import { AuthService } from "./auth.service";

import { apiResponse } from "../../utils/ApiResponse";

export class AuthController {
  private service = new AuthService();

  register = async (req: Request, res: Response) => {
    const user = await this.service.register(req.body);

    return apiResponse(res, user.success, "Registration successful", user.data?.user);
  };

  login = async (req: Request, res: Response) => {
    const result = await this.service.login(req.body.email, req.body.password);

    if(!result.success){
        return apiResponse(res, false, result.message)
    }

    const refreshToken = result.data?.refreshToken;
    const accessToken = result.data?.accessToken;

    //   set the refresh token in an httpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return apiResponse(res, result.success, "Login successful", result?.data.user);
  };

  logout = async (req: Request, res: Response) => {
    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");

    return apiResponse(res, true, "Logout successful");
  }
}
