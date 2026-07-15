"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";


export async function deleteTimeline(
  id: string
) {

  const supabase =
    await createServerSupabase();


  const { data, error } =
    await supabase
      .from("timeline")
      .delete()
      .eq(
        "id",
        id
      )
      .select();



  console.log("DELETE ID:", id);
  console.log("DELETE RESULT:", data);



  if(error){

    console.log(error);

    throw error;

  }



  if(!data || data.length === 0){

    throw new Error(
      "Data tidak ditemukan atau tidak punya izin delete"
    );

  }



  revalidatePath(
    "/dashboard/timeline"
  );

}