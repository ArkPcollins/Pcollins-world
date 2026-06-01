import { Request, Response }
from "express";

import { AuthService }
from "./auth.service";

import { ApiResponse }
from "../../utils/ApiResponse";

export class AuthController {

  private service =
    new AuthService();

  register = async (
    req: Request,
    res: Response
  ) => {

    const user =
      await this.service.register(
        req.body
      );

    res.status(201).json(
      new ApiResponse(
        "Registration successful",
        user
      )
    );
  };

  login = async (
    req: Request,
    res: Response
  ) => {

    const result =
      await this.service.login(
        req.body.email,
        req.body.password
      );

    res.json(
      new ApiResponse(
        "Login successful",
        result
      )
    );
  };
}