"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LogIn, AlertCircle } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { loginSchema, type LoginFormData } from "../types/login";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/feed";
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        setErrorMessage("Invalid email or password");
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {errorMessage && (
        <div className="p-4 rounded-xl bg-destructive border-2 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] text-destructive-foreground flex items-center gap-3 animate-in slide-in-from-top-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-bold uppercase">{errorMessage}</p>
        </div>
      )}

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

      <Button
        type="submit"
        disabled={isLoading}
        variant="brutalist"
        className="w-full mt-6"
        size="lg"
      >
        {isLoading ? (
          <Loader2 className="w-7 h-7 animate-spin" />
        ) : (
          <>
            Log In{" "}
            <LogIn className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  );
}
