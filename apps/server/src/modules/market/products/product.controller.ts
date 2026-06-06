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

getOne = async (req: any, res: Response) => {
  const product = await this.service.getProduct(req.params.id); 
  return apiResponse(res, true, "Product fetched", product);
};

search = async (req: any, res: Response) => {
  const results = await this.service.searchProducts(req.query.q as string);
  return apiResponse(res, true, "Search results", results);
};
}