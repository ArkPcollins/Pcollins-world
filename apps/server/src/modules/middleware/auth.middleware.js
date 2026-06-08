import { JwtService } from "../services/jwt.service";
import { UserModel } from "../users/user.model";
export const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    const token = authHeader.replace("Bearer ", "");
    const decoded = JwtService.verifyAccessToken(token);
    const userId = decoded.userId;
    const user = await UserModel.findById(userId);
    req.user = user;
    next();
};
