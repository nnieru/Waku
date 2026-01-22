import Link from "next/link";
import { Button } from "~/components/ui/button";

export const LandingPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background blobs for vibe */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse" />

      <div className="z-10 text-center space-y-8 max-w-3xl">
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-primary drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] dark:drop-shadow-[5px_5px_0px_rgba(255,255,255,0.5)]">
          WAKU
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-foreground">
          Money management for the{" "}
          <span className="text-accent underline decoration-wavy decoration-secondary decoration-4">
            next gen
          </span>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Link href="/register">
            <Button variant="brutalist" size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="brutalist-outline" size="lg">
              Member Login
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
