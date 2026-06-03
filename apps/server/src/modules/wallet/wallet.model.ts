import mongoose from "mongoose";

const walletSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      unique: true,
      index: true
    }
  },
  { timestamps: true }
);

export const WalletModel = mongoose.model("Wallet", walletSchema);