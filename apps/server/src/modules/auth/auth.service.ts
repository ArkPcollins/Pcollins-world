import bcrypt from "bcryptjs";

import { ApiError } from "../../utils/ApiError";

import { AuthRepository } from "./auth.repository";
import { JwtService } from "../services/jwt.service";
import { SessionModel } from "../sessions/session.model";
import { serviceResponse } from "../../utils/ApiResponse";

export class AuthService {
  private repository = new AuthRepository();

  async register(data: any) {
    const existingUser = await this.repository.findByEmail(data.email);

    if (existingUser) {
      return serviceResponse(false, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const user = await this.repository.createUser({
      ...data,
      password: hashedPassword,
    });

    return serviceResponse(true, "Registration successful", user);
  }

  async login(email: string, password: string) {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      return serviceResponse(false, "Invalid credentials");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return serviceResponse(false, "Invalid credentials");
    }

    const accessToken = JwtService.signAccessToken(user._id.toString());

    const refreshToken = JwtService.signRefreshToken(user._id.toString());

    await this.repository.updateRefreshToken(user._id.toString(), refreshToken);

    return serviceResponse(true, "Login successful", {
      user,
      accessToken,
      refreshToken,
    });
  }

  async refresh(refreshToken: string) {
    const payload = JwtService.verifyRefreshToken(refreshToken);

    const accessToken = JwtService.signAccessToken(payload.userId);

    const newRefresh = JwtService.signRefreshToken(payload.userId);
    
    return serviceResponse(true, "Token refreshed", {
      accessToken,
      refreshToken: newRefresh,
    });
  }
}
