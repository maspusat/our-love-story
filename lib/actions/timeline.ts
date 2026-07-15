"use server";


import { createServerSupabase } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";



export async function addTimeline(
  formData: FormData
) {

  const supabase =
    await createServerSupabase();



  // ==========================
  // GET FORM DATA
  // ==========================

  const title =
    formData.get("title") as string;


  const description =
    formData.get("description") as string;


  const event_date =
    formData.get("event_date") as string;


  const file =
    formData.get("image") as File;




  if(!title){

    throw new Error(
      "Judul timeline wajib diisi"
    );

  }


  if(!event_date){

    throw new Error(
      "Tanggal wajib diisi"
    );

  }





  // ==========================
  // GET USER LOGIN
  // ==========================


  const {
    data:{
      user
    }
  } =
  await supabase.auth.getUser();



  if(!user){

    throw new Error(
      "User belum login"
    );

  }





  // ==========================
  // UPLOAD IMAGE
  // ==========================


  let image_url:string | null = null;



  if(
    file &&
    file.size > 0
  ){


    const filename =
      `timeline/${Date.now()}-${file.name}`;



    const {
      error:uploadError
    } =
    await supabase
      .storage
      .from("gallery")
      .upload(
        filename,
        file,
        {
          cacheControl:"3600",
          upsert:false
        }
      );



    if(uploadError){

      console.log(
        "UPLOAD ERROR",
        uploadError
      );


      throw new Error(
        uploadError.message
      );

    }




    const {
      data
    } =
    supabase
      .storage
      .from("gallery")
      .getPublicUrl(
        filename
      );



    image_url =
      data.publicUrl;


  }





  // ==========================
  // INSERT DATABASE
  // ==========================


  const {
    error:insertError
  }
  =
  await supabase
    .from("timeline")
    .insert({

      title,

      description,

      event_date,

      image_url,

      created_by:user.id

    });




  if(insertError){


    console.log(
      "DATABASE ERROR",
      insertError
    );


    throw new Error(
      insertError.message
    );


  }





  // ==========================
  // REFRESH PAGE
  // ==========================


  revalidatePath(
    "/dashboard/timeline"
  );


}