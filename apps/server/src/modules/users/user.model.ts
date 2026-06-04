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

    avatar: { type: String },

    phone: { type: String },

    address: { type: String },

    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },

    verificationToken: {
      type: String,
    },
    verificationExpires: {
      type: Date,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpires: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },

    refreshToken: { type: String },
    profileCompleted: { type: Boolean, default: false },
    lastLoginAt: { type: Date },
    isSuspended: {
      type: Boolean,
      default: false,
    },
    suspensionReason: { type: String },
    verifiedAgent: {
      type: Boolean,
      default: false,
    },
    verifiedLandlord: {
      type: Boolean,
      default: false,
    },
    ...baseSchemaFields,
  },
  baseSchemaOptions
);

export const UserModel = mongoose.model("User", userSchema);
