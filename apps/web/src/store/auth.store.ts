import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/user";

interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  login: (token: string, user: User) => void;
  logout: () => void;
}

// FIX: Combined 'create' with 'persist' and added mandatory config parameter configuration
export const authStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),

      login: (token, user) => {
        // Best practice: Automatically attach the token to localStorage for Axios to intercept
        localStorage.setItem("token", token);
        set({
          token,
          user,
          isAuthenticated: true,
        });
      },

      logout: () => {
        localStorage.removeItem("token");
        set({
          token: null,
          user: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "pcollins-auth-storage", 
    }
  )
);
