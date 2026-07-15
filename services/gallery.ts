import { supabase } from "@/lib/supabase/client";

export async function getGallery() {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("display_order", {
      ascending: true,
    });

  if (error) throw error;

  return data;
}