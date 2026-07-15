"use server";

import { revalidatePath } from "next/cache";

import { createServerSupabase } from "@/lib/supabase/server";

export async function deleteLoveLetter(id: string) {
  const supabase = await createServerSupabase();

  const { error } = await supabase
    .from("love_letters")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/dashboard/love-letters");
  revalidatePath("/");
}