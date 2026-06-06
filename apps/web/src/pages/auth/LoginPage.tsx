import { AuthCard } from "../../components/auth/AuthCard";

import { LoginForm } from "../../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div
      className="
       flex
       min-h-screen
       items-center
       justify-center
       bg-slate-50
      "
    >
      <AuthCard title="Login" subtitle="Welcome Back">
        <LoginForm />
      </AuthCard>
    </div>
  );
}
