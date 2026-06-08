import { UserService } from "./user.service";
import { apiResponse } from "../../utils/apiResponse";
export class UserController {
    service = new UserService();
    getMe = async (req, res) => {
        const data = await this.service.getMe(req.user.userId);
        return apiResponse(res, true, "User profile fetched", data);
    };
    updateRole = async (req, res) => {
        const user = await this.service.updateRole(req.user.userId, req.body.role);
        return apiResponse(res, true, "Role updated", user);
    };
    completeProfile = async (req, res) => {
        const profile = await this.service.completeProfile(req.user.userId, req.body);
        return apiResponse(res, true, "Profile updated", profile);
    };
}
