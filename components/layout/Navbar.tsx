import Link from "next/link";
import { navigation } from "@/data/navigation";
import { createServerSupabase } from "@/lib/supabase/server";
import NavLinks from "./NavLinks"; // Import komponen client di sini

export default async function Navbar() {
  const supabase = await createServerSupabase();

  const { data: settings } = await supabase
    .from("settings")
    .select("website_title")
    .single();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/40 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        <Link href="/" className="text-xl font-bold text-rose-600">
          ❤️ {settings?.website_title ?? "Our Love Story"}
        </Link>

        {/* Menggunakan NavLinks yang otomatis mendeteksi halaman aktif */}
        <NavLinks items={navigation} />

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