import mongoose from "mongoose";
export var TransactionType;
(function (TransactionType) {
    TransactionType["CREDIT"] = "credit";
    TransactionType["DEBIT"] = "debit";
})(TransactionType || (TransactionType = {}));
export var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["SUCCESS"] = "success";
    TransactionStatus["FAILED"] = "failed";
})(TransactionStatus || (TransactionStatus = {}));
const transactionSchema = new mongoose.Schema({
    walletId: {
        type: mongoose.Types.ObjectId,
        ref: "Wallet",
        index: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        index: true
    },
    type: {
        type: String,
        enum: Object.values(TransactionType)
    },
    amount: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        unique: true,
        index: true
    },
    status: {
        type: String,
        enum: Object.values(TransactionStatus),
        default: TransactionStatus.PENDING
    },
    metadata: {
        type: Object
    },
    paymentProof: {
        url: String,
        publicId: String
    }
}, { timestamps: true });
export const TransactionModel = mongoose.model("Transaction", transactionSchema);
