import { authStore } from "@/store/auth.store";
import axios from "axios";


export const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL,

  withCredentials: true,

  headers: {
    "Content-Type":
      "application/json"
  }
});

api.interceptors.request.use(
  (config) => {
    const token =
      authStore.getState().token;

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

api.interceptors.response.use(
    response => response,
   
    async error => {
   
      const originalRequest =
      error.config;
   
      if(
         error.response?.status===401
         &&
         !originalRequest._retry
      ){
   
         originalRequest._retry=true;
   
         try{
   
            const response=
            await api.post(
             "/auth/refresh"
            );
   
            const token=
            response.data.accessToken;
   
            authStore
             .getState()
             .setToken(token);
   
            originalRequest.headers.Authorization=
            `Bearer ${token}`;
   
            return api(
             originalRequest
            );
   
         }catch{
   
            authStore
             .getState()
             .logout();
         }
   
      }
   
      return Promise.reject(
         error
      );
    }
   );