"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase/client";

import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await supabase.auth.signOut();

    toast.success("Logout berhasil");

    router.refresh();

    router.push("/login");
  }

  return (
    <Button
      variant="destructive"
      onClick={logout}
    >
      Logout
    </Button>
  );
}