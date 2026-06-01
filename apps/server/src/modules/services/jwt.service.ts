import jwt from "jsonwebtoken";
import { env } from "../../config/env";


export class JwtService {

  static signAccessToken(
    userId: string
  ) {
    return jwt.sign(
      { userId },
      env.JWT_SECRET,
      {
        expiresIn: "15m"
      }
    );
  }

  static signRefreshToken(
    userId: string
  ) {
    return jwt.sign(
      { userId },
      env.JWT_REFRESH_SECRET,
      {
        expiresIn: "7d"
      }
    );
  }

  static verifyAccessToken(
    token: string
  ) {
    return jwt.verify(
      token,
      env.JWT_SECRET
    );
  }

  static verifyRefreshToken(
    token: string
  ) {
    return jwt.verify(
      token,
      env.JWT_REFRESH_SECRET
    );
  }
}