"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabase } from "@/lib/supabase/server";

export async function deleteGallery(
  id: string,
  storagePath: string
) {
  const supabase = await createServerSupabase();

  const { error: storageError } =
    await supabase.storage
      .from("gallery")
      .remove([storagePath]);

  if (storageError) {
    throw storageError;
  }

  const { error } = await supabase
    .from("gallery")
    .delete()
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/dashboard/gallery");
}