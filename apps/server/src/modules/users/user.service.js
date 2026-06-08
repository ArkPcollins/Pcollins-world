import { UserRepository } from "./user.repository";
import { ProfileModel } from "../profile/profile.model";
import { ApiError } from "../../utils/ApiError";
export class UserService {
    repo = new UserRepository();
    async getMe(userId) {
        const user = await this.repo.findById(userId);
        if (!user) {
            throw new ApiError(404, "User not found");
        }
        const profile = await ProfileModel.findOne({ userId });
        return { user, profile };
    }
    async updateRole(userId, role) {
        const user = await this.repo.findById(userId);
        if (!user) {
            throw new ApiError(404, "User not found");
        }
        user.role = role;
        await user.save();
        return user;
    }
    async completeProfile(userId, data) {
        const profile = await ProfileModel.findOneAndUpdate({ userId }, data, { upsert: true, new: true });
        await this.repo.updateProfileStatus(userId, true);
        return profile;
    }
}
