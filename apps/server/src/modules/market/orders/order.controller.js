import { OrderService } from "./order.service";
import { apiResponse } from "../../../utils/apiResponse";
export class OrderController {
    service = new OrderService();
    createFromCart = async (req, res) => {
        const order = await this.service.createOrderFromCart(req.user.userId);
        return apiResponse(res, true, "Order created", order);
    };
    getMyOrders = async (req, res) => {
        const orders = await this.service.getUserOrders(req.user.userId);
        return apiResponse(res, true, "Orders fetched", orders);
    };
    markAsPaid = async (req, res) => {
        const order = await this.service.markAsPaid(req.params.id, req.body.reference);
        return apiResponse(res, true, "Order updated", order);
    };
}
