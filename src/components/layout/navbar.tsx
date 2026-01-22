import Link from "next/link";
import { navigationItems } from "~/types/navigation_item";

interface NavbarProps {
  isUserLoggedIn: boolean;
}
export const Navbar = ({ isUserLoggedIn }: Readonly<NavbarProps>) => {
  const items = navigationItems.filter(
    (x) => x.authRequired === isUserLoggedIn,
  );
  return (
    <nav className="hidden md:flex items-center gap-8">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
