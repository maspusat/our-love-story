"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabase } from "@/lib/supabase/server";

export async function uploadGallery(formData: FormData) {
  const supabase = await createServerSupabase();

  const file = formData.get("image") as File;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!file || file.size === 0) {
    throw new Error("Pilih gambar terlebih dahulu.");
  }

  // Maksimal 5 MB
  const maxSize = 5 * 1024 * 1024;

  if (file.size > maxSize) {
    throw new Error("Ukuran gambar maksimal 5 MB.");
  }

  // Nama file unik
  const filename = `${Date.now()}-${file.name}`;

  // Path yang disimpan di database
  const storagePath = filename;

  // Upload ke Supabase Storage
  const { error: uploadError } = await supabase.storage
    .from("gallery")
    .upload(storagePath, file);

  if (uploadError) {
    throw uploadError;
  }

  // Ambil URL public
  const {
    data: { publicUrl },
  } = supabase.storage
    .from("gallery")
    .getPublicUrl(storagePath);

  // User login
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // Simpan ke database
  const { error } = await supabase
    .from("gallery")
    .insert({
      title,
      description,
      image_url: publicUrl,
      storage_path: storagePath,
      created_by: user.id,
    });

  if (error) {
    // Jika insert database gagal,
    // hapus file yang sudah terupload agar tidak menjadi file sampah.
    await supabase.storage
      .from("gallery")
      .remove([storagePath]);

    throw error;
  }

  revalidatePath("/dashboard/gallery");
  revalidatePath("/");
}