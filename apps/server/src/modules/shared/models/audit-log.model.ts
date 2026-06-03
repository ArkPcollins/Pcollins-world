import mongoose, { Schema } from "mongoose";
import { baseSchemaOptions } from "../database/base.schema";

const auditSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    action: { type: String },
    resource: { type: String },
    metadata: { type: Object },
  },
  baseSchemaOptions
);

export const AuditLogModel = mongoose.model("AuditLog", auditSchema);

// USER LOGIN/LOGOUT, PASSWORD CHANGED, PROPERTY CREATED ETC...
