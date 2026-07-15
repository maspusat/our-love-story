import { supabase } from "@/lib/supabase/client";

export async function getGallery() {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("display_order");

  if (error) throw error;

  return data;
}

export async function uploadImage(
  file: File
) {
  const fileName =
    `${Date.now()}-${file.name}`;

  const { data, error } =
    await supabase.storage
      .from("gallery")
      .upload(fileName, file);

  if (error) throw error;

  return data.path;
}

export function getImageUrl(
  path: string
) {
  return supabase.storage
    .from("gallery")
    .getPublicUrl(path)
    .data.publicUrl;
}

export async function createGallery(
  title: string,
  description: string,
  imageUrl: string
) {
  const { error } =
    await supabase
      .from("gallery")
      .insert({
        title,
        description,
        image_url: imageUrl,
      });

  if (error)
    throw error;
}