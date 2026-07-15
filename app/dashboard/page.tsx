import { createServerSupabase } from "@/lib/supabase/server";
import { Switch } from "@/components/ui/switch";

export default async function DashboardPage() {
  const supabase = await createServerSupabase();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <h1 className="text-4xl font-bold text-rose-600">
        Dashboard ❤️
      </h1>

      <p className="mt-3 text-gray-600">
        Selamat datang kembali
      </p>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow">
        <p className="text-gray-500">
          Login sebagai
        </p>

        <p className="mt-2 text-xl font-semibold text-gray-900">
          {user?.email}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Test Switch
          </span>

          <Switch defaultChecked />
        </div>
      </div>
    </>
  );
}