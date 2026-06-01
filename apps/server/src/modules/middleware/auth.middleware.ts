import {
    Request,
    Response,
    NextFunction
  }
  from "express";
  
  import { JwtService }
  from "../services/jwt.service";
  
  export const authenticate =
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
  
    const authHeader =
      req.headers.authorization;
  
    if(!authHeader){
  
      return res.status(401).json({
        message:"Unauthorized"
      });
    }
  
    const token =
      authHeader.replace(
        "Bearer ",
        ""
      );
  
    const decoded =
      JwtService.verifyAccessToken(
        token
      );
  
    req.user = decoded;
  
    next();
  };