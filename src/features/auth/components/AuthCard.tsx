"use client";

import { Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { usePathname, useRouter } from "next/navigation";

interface AuthCardProps {
  children: React.ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentTab = pathname.includes("/register") ? "register" : "login";

  const handleTabChange = (value: string) => {
    router.push(value === "login" ? "/login" : "/register");
  };

  return (
    <Card variant="brutalist" className="w-full max-w-md p-4 sm:p-0 bg-card">
      <CardHeader className="text-center px-4 sm:px-6">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary border-2 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)]">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
          </div>
        </div>
        <CardTitle className="text-2xl sm:text-4xl font-black tracking-tighter uppercase">
          WAKU AUTH
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-muted-foreground font-bold italic">
          Stop being mid. Start being rich.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
        <Tabs
          value={currentTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <div className="animate-in fade-in zoom-in-95 duration-300">
            {children}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
