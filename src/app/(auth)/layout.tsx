"use client";

import AuthCard from "~/features/auth/components/AuthCard";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground p-4 sm:p-8 flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Background blobs for vibe - matching landing page */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse" />

      <div className="w-full flex justify-center relative z-10">
        <AuthCard>{children}</AuthCard>
      </div>

      <div className="absolute bottom-8 text-muted-foreground font-mono text-sm">
        secure vibes only. waku inc.
      </div>
    </main>
  );
}
