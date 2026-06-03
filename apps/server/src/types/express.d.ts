import { UserRole } from "../modules/shared/enums/role.enum";


declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: UserRole;
        // Add any other user properties your JWT payload contains
      };
    }
  }
}
