import { AuditLogModel } from "./audit-log.model";
export class AuditService {
    async log(data) {
        return AuditLogModel.create(data);
    }
    async getAuditLogs(filter, page = 1, limit = 50) {
        const query = {};
        if (filter.userId)
            query.userId = filter.userId;
        if (filter.module)
            query.module = filter.module;
        if (filter.action)
            query.action = { $regex: filter.action, $options: "i" };
        if (filter.startDate || filter.endDate) {
            query.createdAt = {};
            if (filter.startDate)
                query.createdAt.$gte = new Date(filter.startDate);
            if (filter.endDate)
                query.createdAt.$lte = new Date(filter.endDate);
        }
        const logs = await AuditLogModel.find(query)
            .populate("userId", "firstName lastName email")
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);
        const total = await AuditLogModel.countDocuments(query);
        return {
            data: logs,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        };
    }
    async getUserAuditLogs(userId, page = 1, limit = 20) {
        return this.getAuditLogs({ userId }, page, limit);
    }
    async getModuleAuditLogs(module, page = 1, limit = 50) {
        return this.getAuditLogs({ module }, page, limit);
    }
}
