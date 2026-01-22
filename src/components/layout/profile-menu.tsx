"use client";

import { User, LogOut } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { logout } from "~/features/auth/actions/logout";

interface ProfileMenuProps {
  user: {
    name?: string | null;
    email?: string | null;
  };
}

export const ProfileMenu = ({ user }: ProfileMenuProps) => {
  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : (user.email?.[0]?.toUpperCase() ?? "U");

  const handleSignOut = async () => {
    await logout();
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
          aria-label="Profile menu"
        >
          <span className="font-black text-sm text-primary-foreground">
            {initials}
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-background border-4 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] p-2 z-50"
          sideOffset={8}
          align="end"
        >
          <div className="px-3 py-2 border-b-2 border-foreground mb-2">
            {user.name && (
              <p className="font-black text-sm uppercase tracking-wide">
                {user.name}
              </p>
            )}
            {user.email && (
              <p className="text-xs text-muted-foreground truncate mt-1">
                {user.email}
              </p>
            )}
          </div>

          <DropdownMenu.Item
            className="flex items-center gap-2 px-3 py-2 text-sm font-bold uppercase tracking-wide cursor-pointer hover:bg-primary hover:text-primary-foreground outline-none transition-colors"
            onSelect={handleSignOut}
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
