import mongoose from "mongoose";
import { UserRole } from "../shared/enums/role.enum";
import {
  baseSchemaFields,
  baseSchemaOptions,
} from "../shared/database/base.schema";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: String,

    phone: String,

    address: String,

    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    refreshToken: String,
    ...baseSchemaFields,
  },
  baseSchemaOptions
);

export const UserModel = mongoose.model("User", userSchema);
