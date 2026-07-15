"use server";

import { revalidatePath } from "next/cache";

import { createServerSupabase } from "@/lib/supabase/server";

export async function addLoveLetter(
  formData: FormData
) {
  const supabase =
    await createServerSupabase();

  const title =
    formData.get("title") as string;

  const content =
    formData.get("content") as string;

  const { error } =
    await supabase
      .from("love_letters")
      .insert({
        title,
        content,
      });

  // if (error) {
  //   console.error(
  //     "Supabase Error:",
  //     error
  //   );

  //   throw new Error(error.message);
  // }

  if (error) {
    console.log(JSON.stringify(error, null, 2));

    throw new Error(error.message);
  }

  revalidatePath(
    "/dashboard/love-letters"
  );

  revalidatePath("/");
}