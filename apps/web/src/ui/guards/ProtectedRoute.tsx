
import {
    Navigate
  } from "react-router-dom";
  
  interface Props {
    isAuthenticated: boolean;
    children: React.ReactNode;
  }
  
  export function ProtectedRoute({
    isAuthenticated,
    children
  }: Props) {
    if (!isAuthenticated) {
      return (
        <Navigate
          replace
          to="/login"
        />
      );
    }
  
    return <>{children}</>;
  }