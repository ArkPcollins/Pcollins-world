import { PropertyModel } from "./property.model";
export class PropertyRepository {
    create(data) {
        return PropertyModel.create(data);
    }
    findById(id) {
        return PropertyModel.findById(id);
    }
    findAll(filter, page = 1, limit = 10) {
        return PropertyModel.find(filter)
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });
    }
    search(query) {
        return PropertyModel.find({
            $text: { $search: query }
        });
    }
    update(id, data) {
        return PropertyModel.findByIdAndUpdate(id, data, {
            new: true
        });
    }
    incrementViews(id) {
        return PropertyModel.findByIdAndUpdate(id, {
            $inc: { views: 1 }
        });
    }
}
