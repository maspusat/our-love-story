"use server";

import { revalidatePath } from "next/cache";

import { createServerSupabase } from "@/lib/supabase/server";

function generateFilename(
  file: File
) {
  const extension =
    file.name.split(".").pop();

  return `${crypto.randomUUID()}.${extension}`;
}

export async function updateSettings(
  formData: FormData
) {
  const supabase =
    await createServerSupabase();

  const id =
    formData.get("id") as string;

  if (!id) {
    throw new Error(
      "Settings ID tidak ditemukan."
    );
  }

  const website_title =
    formData.get("website_title") as string;

  const groom_name =
    formData.get("groom_name") as string;

  const bride_name =
    formData.get("bride_name") as string;

  const tagline =
    formData.get("tagline") as string;

  const story_title =
    formData.get("story_title") as string;

  const story_description =
    formData.get("story_description") as string;

  const anniversary =
    formData.get("anniversary") as string;

  const birthday_groom =
    formData.get("birthday_groom") as string;

  const birthday_bride =
    formData.get("birthday_bride") as string;

  const theme_color =
    formData.get("theme_color") as string;

  const music_title =
    formData.get("music_title") as string;

  const music_artist =
    formData.get("music_artist") as string;

  const oldImage =
    formData.get("old_image") as string;

  const oldMusic =
    formData.get("old_music") as string;

  const heroFile =
    formData.get("hero_image") as File;

  const musicFile =
    formData.get("music") as File;

  let hero_image =
    oldImage;

  let music_url =
    oldMusic;

  /*
  |--------------------------------------------------------------------------
  | HERO IMAGE
  |--------------------------------------------------------------------------
  */

  if (
    heroFile &&
    heroFile.size > 0
  ) {
    if (oldImage) {
      const filename =
        oldImage.split("/").pop();

      if (filename) {
        await supabase.storage
          .from("settings")
          .remove([filename]);
      }
    }

    const filename =
      generateFilename(heroFile);

    const {
      error: uploadError,
    } =
      await supabase.storage
        .from("settings")
        .upload(
          filename,
          heroFile,
          {
            upsert: true,
          }
        );

    if (uploadError) {
      console.error(uploadError);

      throw new Error(
        uploadError.message
      );
    }

    const {
      data,
    } =
      supabase.storage
        .from("settings")
        .getPublicUrl(
          filename
        );

    hero_image =
      data.publicUrl;
  }

  /*
  |--------------------------------------------------------------------------
  | MUSIC
  |--------------------------------------------------------------------------
  */

  if (
    musicFile &&
    musicFile.size > 0
  ) {
    if (oldMusic) {
      const filename =
        oldMusic.split("/").pop();

      if (filename) {
        await supabase.storage
          .from("music")
          .remove([filename]);
      }
    }

    const filename =
      generateFilename(musicFile);

    const {
      error: uploadError,
    } =
      await supabase.storage
        .from("music")
        .upload(
          filename,
          musicFile,
          {
            upsert: true,
          }
        );

    if (uploadError) {
      console.error(uploadError);

      throw new Error(
        uploadError.message
      );
    }

    const {
      data,
    } =
      supabase.storage
        .from("music")
        .getPublicUrl(
          filename
        );

    music_url =
      data.publicUrl;
  }

  /*
  |--------------------------------------------------------------------------
  | UPDATE DATABASE
  |--------------------------------------------------------------------------
  */

  const {
    error,
  } =
    await supabase
      .from("settings")
      .update({
        website_title,

        groom_name,
        bride_name,

        tagline,

        story_title,
        story_description,

        anniversary,

        birthday_groom,
        birthday_bride,

        theme_color,

        music_title,
        music_artist,

        hero_image,
        music_url,
      })
      .eq(
        "id",
        id
      );

  if (error) {
    console.error(error);

    throw new Error(
      error.message
    );
  }

  revalidatePath("/");

  revalidatePath(
    "/dashboard/settings"
  );
}