import Link from "next/link";
import { MoveLeft, Ghost } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground selection:bg-primary/30">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-md space-y-8 text-center">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-secondary/10 text-secondary animate-in fade-in zoom-in duration-700">
          <Ghost className="h-12 w-12" />
          <div className="absolute -inset-1 rounded-3xl bg-secondary/20 blur-xl animate-pulse" />
        </div>

        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
          <h1 className="text-6xl font-black tracking-tighter sm:text-8xl bg-linear-to-br from-foreground to-foreground/30 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-bold tracking-tight">Page not found</h2>
          <p className="text-lg text-muted-foreground">
            The page you are looking for doesn&apos;t exist or has been moved to
            a different dimension.
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
          <Button
            asChild
            size="lg"
            className="group px-8 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            <Link href="/">
              <MoveLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Return Home
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
