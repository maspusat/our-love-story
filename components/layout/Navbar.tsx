"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-xl font-bold text-rose-600"
        >
          ❤️ Our Love Story
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium text-gray-700 transition hover:text-rose-500"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/login"
          className="rounded-full bg-rose-500 px-5 py-2 text-white transition hover:bg-rose-600"
        >
          Login
        </Link>

      </nav>
    </header>
  );
}