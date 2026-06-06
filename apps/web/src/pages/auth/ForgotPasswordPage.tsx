import { AuthCard } from "../../components/auth/AuthCard";

import { ForgotPasswordForm } from "../../components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div
      className="
       flex
       min-h-screen
       items-center
       justify-center
      "
    >
      <AuthCard title="Forgot Password">
        <ForgotPasswordForm />
      </AuthCard>
    </div>
  );
}
