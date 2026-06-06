import { api }
from "../lib/axios";

export class UserService {

 static async profile(){
  const response =
  await api.get(
   "/users/profile"
  );
  return response.data;
 }

 static async updateProfile(
  payload:any
 ){

  const response=
  await api.patch(
   "/users/profile",
   payload
  );
  return response.data;
 }

}