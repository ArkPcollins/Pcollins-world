import { AuthCard } from "../../components/auth/AuthCard";

import { RegisterForm } from "../../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div
      className="
      flex
      min-h-screen
      items-center
      justify-center
      "
    >
      <AuthCard title="Create Account">
        <RegisterForm />
      </AuthCard>
    </div>
  );
}
