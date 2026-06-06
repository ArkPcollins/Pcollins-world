import { Response } from "express";
import { InspectionService } from "./inspection.service";
import { apiResponse } from "../../utils/apiResponse";

export class InspectionController {
  private service = new InspectionService();

  bookInspection = async (req: any, res: Response) => {
    const inspection = await this.service.bookInspection(
      req.user.userId,
      req.params.propertyId,
      req.body.scheduledDate
    );
    return apiResponse(res, true, "Inspection booked", inspection);
  };

  updateStatus = async (req: any, res: Response) => {
    const inspection = await this.service.updateStatus(
      req.params.id,
      req.body.status
    );
    return apiResponse(res, true, "Inspection updated", inspection);
  };

  getMyInspections = async (req: any, res: Response) => {
    const inspections = await this.service.getUserInspections(req.user.userId);
    return apiResponse(res, true, "Inspections fetched", inspections);
  };

  getPropertyInspections = async (req: any, res: Response) => {
    const inspections = await this.service.getPropertyInspections(
      req.params.propertyId
    );
    return apiResponse(res, true, "Inspections fetched", inspections);
  };
}