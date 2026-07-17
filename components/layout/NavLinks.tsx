"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  title: string;
}

interface NavLinksProps {
  items: NavItem[];
}

export default function NavLinks({ items }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-8 md:flex">
      {items.map((item) => {
        
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`relative py-2 font-medium transition-colors duration-300 ${
                isActive ? "text-rose-600" : "text-gray-700 hover:text-rose-500"
              }`}
            >
              {item.title}
              
              
              {isActive && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-rose-500" />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}