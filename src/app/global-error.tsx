"use client";

import { Outfit } from "next/font/google";
import { RotateCcw, AlertTriangle } from "lucide-react";
import { Button } from "~/components/ui/button";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={`${outfit.variable} dark`}>
      <body className="bg-[#030303] text-white">
        <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
          {/* Intense red gradient background */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[180px]" />
          </div>

          <div className="w-full max-w-lg space-y-10">
            <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-[2.5rem] bg-red-500/20 text-red-500 shadow-2xl shadow-red-500/10">
              <AlertTriangle className="h-16 w-16" />
              <div className="absolute -inset-4 rounded-[3rem] border border-red-500/20 animate-ping duration-1000" />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tighter sm:text-7xl">
                SYSTEM CRASH
              </h1>
              <p className="text-xl text-neutral-400 max-w-md mx-auto leading-relaxed">
                A critical error occurred in the root of the application. The
                system has been halted to prevent further issues.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <Button
                onClick={() => reset()}
                size="lg"
                className="h-16 px-12 text-lg font-bold bg-white text-black hover:bg-neutral-200 transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <RotateCcw className="mr-3 h-6 w-6" />
                Initialize Reset
              </Button>

              {error.digest && (
                <div className="px-4 py-2 rounded-lg bg-red-500/5 border border-red-500/10 font-mono text-sm text-red-400">
                  Critical Trace ID: {error.digest}
                </div>
              )}
            </div>
          </div>

          <div className="mt-24 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
            Waku Kernel Panic // Build 0.1.0
          </div>
        </div>
      </body>
    </html>
  );
}
