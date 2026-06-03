import { Response } from "express";


import { apiResponse } from "../../../utils/apiResponse";
import { ProductService } from "./product.service";


export class ProductController {
  private service = new ProductService();

  create = async (req: any, res: Response) => {
    const cart = await this.service.createProduct({
      name: req.body.name,
      price: req.body.price,
      categoryId: req.body.categoryId,
      images: req.body.images,
      stock: req.body.stock,
      status: req.body.status
     });

    return apiResponse(res, true, "Product Created", cart);
  };

  list = async (req: any, res: Response) => {
    const cart = await this.service.listProducts(req.query);

    return apiResponse(res, true, "Products fetched", cart);
  };

  search = async (req: any, res: Response) => {
    await this.service.searchProducts(req.query.text as string);

    return apiResponse(res, true, "Product itme searched");
  };
  getOne = async (req: any, res: Response) => {
    await this.service.getProduct(req.user.userId);

    return apiResponse(res, true, "Cart cleared");
  };
}