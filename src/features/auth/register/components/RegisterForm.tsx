"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, SendHorizontal, AlertCircle } from "lucide-react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { registerSchema, type RegisterFormData } from "../types/register";

export default function RegisterForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const registerMutation = api.auth.register.useMutation({
    onSuccess: () => {
      // In a real app, you might want to auto-login here or redirect to login tab
      setErrorMessage(null);
      // For now, let's just show a success message or redirect
      router.refresh();
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    setErrorMessage(null);
    registerMutation.mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {errorMessage && (
        <div className="p-4 rounded-xl bg-destructive border-2 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] text-destructive-foreground flex items-center gap-3 animate-in slide-in-from-top-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-bold uppercase">{errorMessage}</p>
        </div>
      )}

      {registerMutation.isSuccess && (
        <div className="p-4 rounded-xl bg-secondary border-2 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] text-secondary-foreground flex items-center gap-3 animate-in slide-in-from-top-2">
          <p className="text-sm font-bold uppercase">
            Account created! Log in to continue.
          </p>
        </div>
      )}

      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-foreground ml-1">
          Your handle
        </label>
        <Input
          {...register("name")}
          variant="brutalist"
          placeholder="AestheticName"
        />
        {errors.name && (
          <p className="text-destructive text-xs font-black uppercase ml-1">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-foreground ml-1">
          Email Address
        </label>
        <Input
          {...register("email")}
          type="email"
          variant="brutalist"
          placeholder="bestie@waku.com"
        />
        {errors.email && (
          <p className="text-destructive text-xs font-black uppercase ml-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-foreground ml-1">
          Secret Code
        </label>
        <Input
          {...register("password")}
          type="password"
          variant="brutalist"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-destructive text-xs font-black uppercase ml-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-foreground ml-1">
          Confirm It
        </label>
        <Input
          {...register("confirmPassword")}
          type="password"
          variant="brutalist"
          placeholder="••••••••"
        />
        {errors.confirmPassword && (
          <p className="text-destructive text-xs font-black uppercase ml-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={registerMutation.isPending}
        variant="brutalist-secondary"
        className="w-full mt-6"
        size="lg"
      >
        {registerMutation.isPending ? (
          <Loader2 className="w-7 h-7 animate-spin" />
        ) : (
          <>
            Let's go{" "}
            <SendHorizontal className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  );
}
