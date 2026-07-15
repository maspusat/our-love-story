import { createServerSupabase } from "@/lib/supabase/server";

import SettingsForm from "@/components/dashboard/settings/SettingsForm";

export default async function SettingsPage() {
  const supabase =
    await createServerSupabase();

  const { data } =
    await supabase
      .from("settings")
      .select("*")
      .limit(1)
      .maybeSingle();

  if (!data) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-3 text-gray-500">
          Data settings belum tersedia.
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Tambahkan satu data pada tabel
          <strong> settings </strong>
          terlebih dahulu.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500">
          Kelola informasi website.
        </p>
      </div>

      <SettingsForm
        settings={data}
      />
    </div>
  );
}