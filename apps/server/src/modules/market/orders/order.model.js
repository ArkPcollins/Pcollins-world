import mongoose from "mongoose";
export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["PAID"] = "PAID";
    OrderStatus["SHIPPED"] = "SHIPPED";
    OrderStatus["DELIVERED"] = "DELIVERED";
    OrderStatus["CANCELLED"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        index: true
    },
    items: [
        {
            productId: mongoose.Types.ObjectId,
            quantity: Number,
            price: Number
        }
    ],
    totalAmount: Number,
    status: {
        type: String,
        enum: Object.values(OrderStatus),
        default: OrderStatus.PENDING
    },
    paymentReference: String
}, { timestamps: true });
export const OrderModel = mongoose.model("Order", orderSchema);
