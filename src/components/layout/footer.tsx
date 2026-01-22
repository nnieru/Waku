import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-background border-t-4 border-foreground py-12 px-4 sm:px-8 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4 max-w-xs">
          <Link
            href="/"
            className="text-4xl font-black tracking-tighter uppercase italic"
          >
            WAKU
          </Link>
          <p className="font-bold text-muted-foreground italic leading-tight">
            Stop being mid. Start being rich. The only money app that actually
            matches your vibes.
          </p>
          <div className="flex gap-4">
            {["TW", "IG", "TT", "DC"].map((social) => (
              <div
                key={social}
                className="w-8 h-8 flex items-center justify-center border-2 border-foreground bg-accent text-accent-foreground font-black text-xs hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0_0_var(--foreground)] transition-all cursor-pointer"
              >
                {social}
              </div>
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-xs border-b-2 border-foreground w-max pb-1">
              Product
            </h4>
            <ul className="space-y-2 font-bold text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Waku Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Investing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Savings
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-widest text-xs border-b-2 border-foreground w-max pb-1">
              Vibe
            </h4>
            <ul className="space-y-2 font-bold text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Manifesto
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary transition-colors"
                >
                  Drops
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h4 className="font-black uppercase tracking-widest text-xs border-b-2 border-foreground w-max pb-1">
              Legal
            </h4>
            <ul className="space-y-2 font-bold text-sm">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t-2 border-muted leading-none">
        <p className="font-mono text-[10px] uppercase tracking-tighter text-muted-foreground">
          © {new Date().getFullYear()} Niel Dev. NO FINANCIAL ADVICE, JUST
          VIBES.
        </p>
      </div>
    </footer>
  );
};
