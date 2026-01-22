"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MoveLeft, RotateCcw, AlertCircle } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground selection:bg-primary/30">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-md space-y-8 text-center">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-destructive/10 text-destructive animate-in fade-in zoom-in duration-700">
          <AlertCircle className="h-12 w-12" />
          <div className="absolute -inset-1 rounded-3xl bg-destructive/20 blur-xl animate-pulse" />
        </div>

        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-linear-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
            Something went wrong
          </h1>
          <p className="text-lg text-muted-foreground">
            We encountered an unexpected error. Don&apos;t worry, it&apos;s not
            you, it&apos;s us.
          </p>
        </div>

        {error.digest && (
          <div className="rounded-2xl border border-border/50 bg-card/30 p-3 text-xs font-mono text-muted-foreground backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
            Error ID: {error.digest}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
          <Button
            onClick={() => reset()}
            size="lg"
            className="group relative overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <RotateCcw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
            Try again
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="backdrop-blur-sm transition-all duration-300 hover:bg-accent/10 active:scale-95"
          >
            <Link href="/">
              <MoveLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <footer className="mt-20 text-sm text-muted-foreground/50 animate-in fade-in duration-1000 delay-700">
        &copy; {new Date().getFullYear()} Waku. All rights reserved.
      </footer>
    </div>
  );
}
