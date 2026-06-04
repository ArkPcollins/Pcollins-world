import { AuditLogModel } from "./audit-log.model";

export class AuditService {
  async log(data: {
    userId?: string;
    action: string;
    module: string;
    metadata?: any;
    ipAddress?: string;
    userAgent?: string;
  }) {
    return AuditLogModel.create(data);
  }
}