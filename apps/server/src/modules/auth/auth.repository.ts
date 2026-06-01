import { UserRepository }
from "../users/user.repository";

export class AuthRepository {

  constructor(
    private readonly users =
      new UserRepository()
  ) {}

  findByEmail(email:string){
    return this.users.findByEmail(email);
  }

  createUser(data:any){
    return this.users.create(data);
  }

  updateRefreshToken(
    id:string,
    token:string
  ){
    return this.users.updateRefreshToken(
      id,
      token
    );
  }
}