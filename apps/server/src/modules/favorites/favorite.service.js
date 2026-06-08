import { FavoriteModel } from "./favorite.model";
import { PropertyModel } from "../properties/property.model";
export class FavoriteService {
    async addFavorite(userId, propertyId) {
        const property = await PropertyModel.findById(propertyId);
        if (!property)
            throw new Error("Property not found");
        const existing = await FavoriteModel.findOne({ userId, propertyId });
        if (existing)
            return existing;
        return FavoriteModel.create({ userId, propertyId });
    }
    async removeFavorite(userId, propertyId) {
        return FavoriteModel.findOneAndDelete({ userId, propertyId });
    }
    async getUserFavorites(userId, page = 1, limit = 10) {
        const favorites = await FavoriteModel.find({ userId })
            .populate("propertyId")
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });
        const total = await FavoriteModel.countDocuments({ userId });
        return {
            data: favorites,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        };
    }
    async isFavorited(userId, propertyId) {
        const fav = await FavoriteModel.findOne({ userId, propertyId });
        return !!fav;
    }
    async getFavoriteCount(propertyId) {
        return FavoriteModel.countDocuments({ propertyId });
    }
}
