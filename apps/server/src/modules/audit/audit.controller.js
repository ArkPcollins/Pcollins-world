import { AuditService } from "./audit.service";
import { apiResponse } from "../../utils/apiResponse";
export class AuditController {
    service = new AuditService();
    getAuditLogs = async (req, res) => {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 50;
        const logs = await this.service.getAuditLogs(req.query, page, limit);
        return apiResponse(res, true, "Audit logs fetched", logs);
    };
    getUserAuditLogs = async (req, res) => {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 20;
        const logs = await this.service.getUserAuditLogs(req.params.userId, page, limit);
        return apiResponse(res, true, "User audit logs fetched", logs);
    };
}
