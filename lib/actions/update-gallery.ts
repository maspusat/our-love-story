"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabase } from "@/lib/supabase/server";

export async function updateGallery(formData: FormData) {
  const supabase = await createServerSupabase();

  const id = formData.get("id") as string;

  const title = formData.get("title") as string;

  const description =
    (formData.get("description") as string) || "";

  const displayOrder = Number(
    formData.get("displayOrder")
  );

  const isFavorite =
    formData.get("isFavorite") === "true";

  const isPublished =
    formData.get("isPublished") === "true";

  const { error } = await supabase
    .from("gallery")
    .update({
      title,
      description,
      display_order: displayOrder,
      is_favorite: isFavorite,
      is_published: isPublished,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/dashboard/gallery");
  revalidatePath("/");
}