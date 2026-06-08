import { FavoriteService } from "./favorite.service";
import { apiResponse } from "../../utils/apiResponse";
export class FavoriteController {
    service = new FavoriteService();
    addFavorite = async (req, res) => {
        const result = await this.service.addFavorite(req.user.userId, req.params.propertyId);
        return apiResponse(res, true, "Added to favorites", result);
    };
    removeFavorite = async (req, res) => {
        const result = await this.service.removeFavorite(req.user.userId, req.params.propertyId);
        return apiResponse(res, true, "Removed from favorites", result);
    };
    getMyFavorites = async (req, res) => {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        const favorites = await this.service.getUserFavorites(req.user.userId, page, limit);
        return apiResponse(res, true, "Favorites fetched", favorites);
    };
    isFavorited = async (req, res) => {
        const isFav = await this.service.isFavorited(req.user.userId, req.params.propertyId);
        return apiResponse(res, true, "Favorite status", { isFavorited: isFav });
    };
}
