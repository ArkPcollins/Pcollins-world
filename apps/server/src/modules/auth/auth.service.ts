import bcrypt from "bcryptjs";

import { ApiError }
from "../../utils/ApiError";

import { AuthRepository }
from "./auth.repository";
import { JwtService } from "../services/jwt.service";


export class AuthService {

  private repository =
    new AuthRepository();

  async register(data:any){

    const existingUser =
      await this.repository.findByEmail(
        data.email
      );

    if(existingUser){

      throw new ApiError(
        409,
        "User already exists"
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        data.password,
        12
      );

    const user =
      await this.repository.createUser({
        ...data,
        password:
          hashedPassword
      });

    return user;
  }

  async login(
    email:string,
    password:string
  ){

    const user =
      await this.repository.findByEmail(
        email
      );

    if(!user){

      throw new ApiError(
        401,
        "Invalid credentials"
      );
    }

    const valid =
      await bcrypt.compare(
        password,
        user.password
      );

    if(!valid){

      throw new ApiError(
        401,
        "Invalid credentials"
      );
    }

    const accessToken =
      JwtService.signAccessToken(
        user.id
      );

    const refreshToken =
      JwtService.signRefreshToken(
        user.id
      );

    await this.repository
      .updateRefreshToken(
        user.id,
        refreshToken
      );

    return {
      user,
      accessToken,
      refreshToken
    };
  }
}