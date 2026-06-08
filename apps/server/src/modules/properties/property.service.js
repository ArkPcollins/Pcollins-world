import { PropertyRepository } from "./property.repository";
import { ApiError } from "../../utils/ApiError";
export class PropertyService {
    repo = new PropertyRepository();
    async createProperty(data, userId) {
        return this.repo.create({
            ...data,
            landlordId: userId
        });
    }
    async getProperty(id) {
        const property = await this.repo.findById(id);
        if (!property) {
            throw new ApiError(404, "Property not found");
        }
        await this.repo.incrementViews(id);
        return property;
    }
    async listProperties(query) {
        const { page = 1, limit = 10, city, type, minPrice, maxPrice } = query;
        const filter = {};
        if (city)
            filter["location.city"] = city;
        if (type)
            filter.type = type;
        if (minPrice || maxPrice) {
            filter.price = {
                $gte: minPrice || 0,
                $lte: maxPrice || 999999999
            };
        }
        return this.repo.findAll(filter, page, limit);
    }
    async searchProperties(search) {
        return this.repo.search(search);
    }
    async updateProperty(id, userId, data) {
        const property = await this.repo.findById(id);
        if (!property) {
            throw new ApiError(404, "Property not found");
        }
        if (property?.landlordId?.toString() !== userId) {
            throw new ApiError(403, "Not authorized");
        }
        return this.repo.update(id, data);
    }
}
