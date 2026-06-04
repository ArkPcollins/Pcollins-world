import { UserModel } from "../users/user.model";
import { PropertyModel } from "../properties/property.model";
import { ProductModel } from "../market/products/product.model";
import { OrderModel } from "../market/orders/order.model";
import { SavingsPlanModel } from "../savings/saving-plan.model";
import { KYCModel, KYCStatus } from "../kyc/kyc.model";
import { TransactionModel, TransactionStatus } from "../wallet/transaction.model";
import { AuditService } from "../audit/audit.service";

const auditService = new AuditService();

export class AdminService {
  async dashboardMetrics() {
    const [
      users,
      properties,
      products,
      orders,
      savingsPlans
    ] = await Promise.all([
      UserModel.countDocuments(),
      PropertyModel.countDocuments(),
      ProductModel.countDocuments(),
      OrderModel.countDocuments(),
      SavingsPlanModel.countDocuments()
    ]);

    return {
      users,
      properties,
      products,
      orders,
      savingsPlans
    };
  }
  async getUsers(query: any) {
    const {
      page = 1,
      limit = 20,
      role,
      search
    } = query;
  
    const filter: any = {};
  
    if (role) {
      filter.role = role;
    }
  
    if (search) {
      filter.$or = [
        {
          email: {
            $regex: search,
            $options: "i"
          }
        },
        {
          firstName: {
            $regex: search,
            $options: "i"
          }
        }
      ];
    }
  
    return UserModel.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);
  }
  async pendingKyc() {
    return KYCModel.find({
      status: KYCStatus.PENDING
    });
  }
  async monthlyRevenue() {
    return TransactionModel.aggregate([
      {
        $match: {
          status: TransactionStatus.SUCCESS
        }
      },
  
      {
        $group: {
          _id: {
            month: {
              $month: "$createdAt"
            }
          },
  
          revenue: {
            $sum: "$amount"
          }
        }
      }
    ]);
  }
  async topProducts() {
    return ProductModel.find()
      .sort({
        salesCount: -1
      })
      .limit(10);
  }
//   async topVendors() {
//     return ProductModel.aggregate([
//       {
//         $group: {
//           _id: "$vendorId",
  
//           totalSales: {
//             $sum: "$salesCount"
//           }
//         }
//       },
  
//       {
//         $sort: {
//           totalSales: -1
//         }
//       }
//     ]);
//   }
  async totalSavings() {
    return  SavingsPlanModel.aggregate([
        {
          $group:{
             _id:{
                month:{
                   $month:"$createdAt"
                }
             },
             totalSaved:{
                $sum:"$currentAmount"
             }
          }
        }
       ]);

    // SavingsPlanModel.aggregate([
    //   {
    //     $group: {
    //       _id: null,
  
    //       total: {
    //         $sum: "$currentAmount"
    //       }
    //     }
    //   }
    // ]);
  }
  async orderTrend() {
    return OrderModel.aggregate([
        {
          $group:{
             _id:{
                month:{
                   $month:"$createdAt"
                }
             },
             totalOrders:{
                $sum:1
             }
          }
        }
       ]);
  }
  async propertyTrend() {
    PropertyModel.aggregate([
        {
          $group:{
             _id:{
                month:{
                  $month:"$createdAt"
                }
             },
             listings:{
                $sum:1
             }
          }
        }
       ]);
  }
  async userTrend() {
    return UserModel.aggregate([
        {
          $group:{
             _id:{
                month:{
                  $month:"$createdAt"
                }
             },
             users:{
                $sum:1
             }
          }
        }
       ]);
  }
  async suspendUser(
    userId:string,
    reason:string
  ){
    const user =
      await UserModel.findByIdAndUpdate(
        userId,
        {
          isSuspended:true,
          suspensionReason:reason
        },
        {new:true}
      );
  
    await auditService.log({
      userId,
      module:"ADMIN",
      action:"USER_SUSPENDED"
    });
  
    return user;
  }
  async activateUser(userId:string){
    return UserModel.findByIdAndUpdate(
      userId,
      {
        isSuspended:false,
        suspensionReason:null
      }
    );
  }
  async verifyAgent(userId:string){
    return UserModel.findByIdAndUpdate(
       userId,
       { verifiedAgent:true }
    );
 }
 async verifyLandlord(userId:string){
    return UserModel.findByIdAndUpdate(
       userId,
       { verifiedLandlord:true }
    );
 }
}