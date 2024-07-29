"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const routes = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

export default function AppHeader() {
  const activePathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 py-4">
   <Logo />

      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  "text-white/70 text-[1.08rem] rounded-sm px-2 py-2 hover:text-white focus:text-white transition",
                  {
                    "bg-black/10 text-white": route.path === activePathname,
                  }
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}