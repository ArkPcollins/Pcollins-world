import jwt from "jsonwebtoken";
import { env } from "../../config/env";
export class JwtService {
    static signAccessToken(userId) {
        return jwt.sign({ userId }, env.JWT_SECRET, {
            expiresIn: "15m"
        });
    }
    static signRefreshToken(userId) {
        return jwt.sign({ userId }, env.JWT_REFRESH_SECRET, {
            expiresIn: "7d"
        });
    }
    static verifyAccessToken(token) {
        const decoded = jwt.verify(token, env.JWT_SECRET);
        // Check if decoded is a string (shouldn't happen with proper tokens)
        if (typeof decoded === 'string') {
            throw new Error('Invalid token format');
        }
        return decoded;
    }
    static verifyRefreshToken(token) {
        const decoded = jwt.verify(token, env.JWT_REFRESH_SECRET);
        // Check if decoded is a string (shouldn't happen with proper tokens)
        if (typeof decoded === 'string') {
            throw new Error('Invalid token format');
        }
        return decoded;
    }
}
