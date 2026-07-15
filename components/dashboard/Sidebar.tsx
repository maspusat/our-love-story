"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Images,
  Clock3,
  Video,
  Heart,
  Settings,
  LayoutDashboard,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Gallery",
    href: "/dashboard/gallery",
    icon: Images,
  },
  {
    title: "Timeline",
    href: "/dashboard/timeline",
    icon: Clock3,
  },
  {
    title: "Videos",
    href: "/dashboard/videos",
    icon: Video,
  },
  {
    title: "Love Letter",
    href: "/dashboard/love-letters",
    icon: Heart,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">
      <div className="border-b p-8">
        <h1 className="text-3xl font-bold text-rose-600">
          ❤️ Our Love Story
        </h1>
      </div>

      <nav className="flex-1 space-y-2 p-5">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === menu.href
                  ? "bg-rose-500 text-white"
                  : "hover:bg-rose-100"
              }`}
            >
              <Icon size={20} />

              {menu.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}