import { FavoriteModel } from "./favorite.model";
import { PropertyModel } from "../properties/property.model";

export class FavoriteService {
  async addFavorite(userId: string, propertyId: string) {
    const property = await PropertyModel.findById(propertyId);
    if (!property) throw new Error("Property not found");

    const existing = await FavoriteModel.findOne({ userId, propertyId });
    if (existing) return existing;

    return FavoriteModel.create({ userId, propertyId });
  }

  async removeFavorite(userId: string, propertyId: string) {
    return FavoriteModel.findOneAndDelete({ userId, propertyId });
  }

  async getUserFavorites(userId: string) {
    return FavoriteModel.find({ userId }).populate("propertyId");
  }

  async isFavorited(userId: string, propertyId: string) {
    const fav = await FavoriteModel.findOne({ userId, propertyId });
    return !!fav;
  }
}