"use server";

import { revalidatePath } from "next/cache";

import { createServerSupabase } from "@/lib/supabase/server";

export async function updateLoveLetter(formData: FormData) {
  const supabase = await createServerSupabase();

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const { error } = await supabase
    .from("love_letters")
    .update({
      title,
      content,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/dashboard/love-letters");
  revalidatePath("/");
}