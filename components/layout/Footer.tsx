import { createServerSupabase } from "@/lib/supabase/server";

export default async function Footer() {
  const supabase =
    await createServerSupabase();

  const { data: settings } =
    await supabase
      .from("settings")
      .select(
        "website_title, groom_name, bride_name"
      )
      .single();

  return (
    <footer className="border-t border-rose-200 bg-white py-10">

      <div className="mx-auto max-w-7xl px-6 text-center">

        <h3 className="text-2xl font-bold text-rose-600">
          ❤️ {settings?.website_title ?? "Our Love Story"}
        </h3>

        <p className="mt-3 text-lg text-gray-700">
          {settings?.groom_name ?? "Groom"}
          {" "}
          ❤️
          {" "}
          {settings?.bride_name ?? "Bride"}
        </p>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          {settings?.website_title ?? "Our Love Story"}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Made with ❤️ for our journey
        </p>

      </div>

    </footer>
  );
}