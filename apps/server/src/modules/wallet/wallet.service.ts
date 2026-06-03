import { WalletModel } from "./wallet.model";
import { TransactionModel, TransactionStatus, TransactionType } from "./transaction.model";
import { ApiError } from "../../utils/ApiError";

export class WalletService {
  async getWallet(userId: string) {
    let wallet = await WalletModel.findOne({ userId });

    if (!wallet) {
      wallet = await WalletModel.create({ userId });
    }

    const transactions = await TransactionModel.find({
      walletId: wallet._id
    });

    const balance = transactions.reduce((acc, tx) => {
      if (tx.status !== TransactionStatus.SUCCESS) return acc;

      return tx.type === TransactionType.CREDIT
        ? acc + tx.amount
        : acc - tx.amount;
    }, 0);

    return { wallet, balance, transactions };
  }

  async credit(userId: string, amount: number, reference: string) {
    const wallet = await this.getOrCreateWallet(userId);

    const tx = await TransactionModel.create({
      walletId: wallet._id,
      userId,
      type: TransactionType.CREDIT,
      amount,
      reference,
      status: TransactionStatus.SUCCESS
    });

    return tx;
  }

  async debit(userId: string, amount: number, reference: string) {
    const {wallet} = await this.getWallet(userId);

    const currentBalance = await this.getBalance(wallet._id.toString());

    if (currentBalance < amount) {
      throw new ApiError(400, "Insufficient balance");
    }

    return TransactionModel.create({
      walletId: wallet._id,
      userId,
      type: TransactionType.DEBIT,
      amount,
      reference,
      status: TransactionStatus.SUCCESS
    });
  }

  private async getBalance(walletId: string) {
    const txs = await TransactionModel.find({ walletId });

    return txs.reduce((acc, tx) => {
      if (tx.status !== TransactionStatus.SUCCESS) return acc;

      return tx.type === TransactionType.CREDIT
        ? acc + tx.amount
        : acc - tx.amount;
    }, 0);
  }

  private async getOrCreateWallet(userId: string) {
    let wallet = await WalletModel.findOne({ userId });

    if (!wallet) {
      wallet = await WalletModel.create({ userId });
    }

    return wallet;
  }
}