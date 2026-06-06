import { InspectionModel } from "./inspection.model";
import { PropertyModel } from "../properties/property.model";

export class InspectionService {
  async bookInspection(userId: string, propertyId: string, scheduledDate: Date) {
    const property = await PropertyModel.findById(propertyId);
    if (!property) throw new Error("Property not found");

    return InspectionModel.create({
      userId,
      propertyId,
      scheduledDate,
      status: "PENDING"
    });
  }

  async updateStatus(inspectionId: string, status: string) {
    return InspectionModel.findByIdAndUpdate(
      inspectionId,
      { status },
      { new: true }
    );
  }

  async getUserInspections(userId: string) {
    return InspectionModel.find({ userId }).populate("propertyId");
  }

  async getPropertyInspections(propertyId: string) {
    return InspectionModel.find({ propertyId }).populate("userId", "firstName lastName email");
  }
}