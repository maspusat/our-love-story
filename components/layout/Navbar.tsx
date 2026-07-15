import Link from "next/link";

import { navigation } from "@/data/navigation";
import { createServerSupabase } from "@/lib/supabase/server";

export default async function Navbar() {
  const supabase =
    await createServerSupabase();

  const { data: settings } =
    await supabase
      .from("settings")
      .select("website_title")
      .single();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-xl font-bold text-rose-600"
        >
          ❤️ {settings?.website_title ?? "Our Love Story"}
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