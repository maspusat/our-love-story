import LogoutButton from "./LogoutButton";
import { createServerSupabase } from "@/lib/supabase/server";
import { USERS } from "@/lib/users";

export default async function Navbar() {
  const supabase = await createServerSupabase();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const displayName =
    USERS[user?.email as keyof typeof USERS] ?? "Love ❤️";

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome Back, {displayName}
        </p>
      </div>

      <LogoutButton />
    </header>
  );
}