import { api }
from "../lib/axios";

export class NotificationService {

 static async list(){

   const response=
   await api.get(
    "/notifications"
   );

   return response.data;

 }

 static async markRead(
   id:string
 ){

   const response=
   await api.patch(

    `/notifications/${id}/read`

   );

   return response.data;

 }

}