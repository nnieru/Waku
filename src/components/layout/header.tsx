import Link from "next/link";
import { Button } from "~/components/ui/button";
import { auth } from "~/server/auth";
import { ProfileMenu } from "./profile-menu";
import { Navbar } from "./navbar";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-4 border-foreground shadow-[0_4px_0_0_var(--foreground)]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
            <span className="font-black text-xl text-primary-foreground italic">
              W
            </span>
          </div>
          <span className="text-3xl font-black tracking-tighter uppercase italic group-hover:skew-x-2 transition-all">
            WAKU
          </span>
        </Link>

        <Navbar isUserLoggedIn={session?.user != null} />

        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              {/* <Link href="/feed" className="hidden sm:block">
                <Button
                  variant="ghost"
                  className="font-black uppercase text-xs tracking-widest"
                >
                  Feed
                </Button>
              </Link> */}
              <ProfileMenu user={session.user} />
            </>
          ) : (
            <>
              <Link href="/login" className="hidden sm:block">
                <Button
                  variant="ghost"
                  className="font-black uppercase text-xs tracking-widest"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="brutalist" size="sm" className="px-6">
                  Join
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
