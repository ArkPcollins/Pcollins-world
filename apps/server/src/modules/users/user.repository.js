import { UserModel } from "./user.model";
export class UserRepository {
    async create(payload) {
        return UserModel.create(payload);
    }
    async findByEmail(email) {
        return UserModel.findOne({ email });
    }
    async findById(id) {
        return UserModel.findById(id);
    }
    async findOne(query) {
        return UserModel.findOne(query);
    }
    async findByIdAndUpdate(id, updateData) {
        return UserModel.findByIdAndUpdate(id, updateData, {
            new: true,
        });
    }
    async updateRefreshToken(userId, token) {
        return UserModel.findByIdAndUpdate(userId, {
            refreshToken: token,
        });
    }
    async updateProfileStatus(userId, status) {
        return UserModel.findByIdAndUpdate(userId, {
            profileCompleted: status,
        });
    }
    async updateLastLogin(userId) {
        return UserModel.findByIdAndUpdate(userId, {
            lastLoginAt: new Date(),
        });
    }
}
