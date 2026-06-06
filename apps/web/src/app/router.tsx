import { createBrowserRouter, Navigate } from "react-router-dom"; // 🟢 Added Navigate import
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import DashboardHome from "@/pages/dashboard/DashboardHomePage";
import { DashboardLayout, ProtectedRoute } from "@/ui";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute isAuthenticated>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      // 🟢 FIX: Catch the default '/' location and push it to '/dashboard'
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <DashboardHome />,
      },
    ],
  },
]);
