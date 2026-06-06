import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { loginSchema } from "../../schemas/auth.schema";

import { AuthService } from "../../services/auth.service";

import { authStore } from "../../store/auth.store";
import { Button, FormInput } from "@/ui";


export function LoginForm() {
  const login = authStore((state) => state.login);

  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: AuthService.login,

    onSuccess: (data) => {
      login(data.accessToken, data.user);

      toast.success("Welcome back");
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
      className="
       space-y-4
      "
    >
      <FormInput control={form.control} name="email" label="Email" />

      <FormInput
        control={form.control}
        name="password"
        label="Password"
        type="password"
      />

      <Button type="submit" loading={mutation.isPending}>
        Login
      </Button>
    </form>
  );
}
