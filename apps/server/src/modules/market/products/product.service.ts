import { ProductModel, ProductStatus } from "./product.model";

import { ApiError } from "../../../utils/ApiError";

export class ProductService {
  async createProduct(data: any) {
    return ProductModel.create({
      ...data,
    });
  }

  async getProduct(id: string) {
    const product = await ProductModel.findById(id);

    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    return product;
  }

  async listProducts(query: any) {
    const {
      page = 1,
      limit = 10,
      category,
      minPrice,
      maxPrice
    } = query;

    const filter: any = {};

    if (category) filter.categoryId = category;

    if (minPrice || maxPrice) {
      filter.price = {
        $gte: minPrice || 0,
        $lte: maxPrice || 9999999
      };
    }

    return ProductModel.find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });
  }

  async searchProducts(text: string) {
    return ProductModel.find({
      $text: { $search: text }
    });
  }

  async decreaseStock(productId: string, qty: number) {
    const product = await ProductModel.findById(productId);

    if (!product) throw new Error("Product not found");

    if (product.stock < qty) {
      throw new Error("Insufficient stock");
    }

    product.stock -= qty;

    if (product.stock === 0) {
      product.status = ProductStatus.OUT_OF_STOCK;
    }

    await product.save();

    return product;
  }
}