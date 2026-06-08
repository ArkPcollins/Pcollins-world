import { apiResponse } from "../../../utils/apiResponse";
import { CategoryService } from "./category.service";
export class CategoryController {
    service = new CategoryService();
    create = async (req, res) => {
        const category = await this.service.create(req.body);
        return apiResponse(res, true, "Category created", category);
    };
    // 🟢 This will now resolve perfectly to Express Request
    list = async (req, res) => {
        const categories = await this.service.list();
        return apiResponse(res, true, "Categories fetched", categories);
    };
    getBySlug = async (req, res) => {
        const category = await this.service.getBySlug(req.params.slug);
        return apiResponse(res, true, "Category fetched", category);
    };
    update = async (req, res) => {
        const category = await this.service.update(req.params.id, req.body);
        return apiResponse(res, true, "Category updated", category);
    };
    delete = async (req, res) => {
        await this.service.delete(req.params.id);
        return apiResponse(res, true, "Category deleted");
    };
}
