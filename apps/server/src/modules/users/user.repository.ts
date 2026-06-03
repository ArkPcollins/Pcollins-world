import { UserModel } from "./user.model";

import { IUser } from "./user.types";

export class UserRepository {

  async create(
    payload: Partial<IUser>
  ) {
    return UserModel.create(payload);
  }

  async findByEmail(
    email: string
  ) {
    return UserModel.findOne({ email });
  }

  async findById(
    id: string
  ) {
    return UserModel.findById(id);
  }

  async updateRefreshToken(
    userId: string,
    token: string
  ) {
    return UserModel.findByIdAndUpdate(
      userId,
      {
        refreshToken: token
      }
    );
  }
  
  async updateProfileStatus(
    userId: string,
    status: boolean
  ) {
    return UserModel.findByIdAndUpdate(userId, {
      profileCompleted: status
    });
  }
  
  async updateLastLogin(userId: string) {
    return UserModel.findByIdAndUpdate(userId, {
      lastLoginAt: new Date()
    });
  }
}

