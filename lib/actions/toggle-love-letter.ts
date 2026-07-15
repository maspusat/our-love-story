"use server";

import { revalidatePath } from "next/cache";

import { createServerSupabase } from "@/lib/supabase/server";

export async function toggleLoveLetter(
  id: string,
  value: boolean
) {
  const supabase = await createServerSupabase();

  const { error } = await supabase
    .from("love_letters")
    .update({
      is_published: value,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/dashboard/love-letters");
  revalidatePath("/");
}