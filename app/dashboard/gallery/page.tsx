import Image from "next/image";

import { createServerSupabase } from "@/lib/supabase/server";

import GalleryUploadDialog from "@/components/dashboard/gallery/GalleryUploadDialog";
import DeleteGalleryButton from "@/components/dashboard/gallery/DeleteGalleryButton";
import EditGalleryDialog from "@/components/dashboard/gallery/EditGalleryDialog";


export default async function DashboardGalleryPage() {

  const supabase = await createServerSupabase();


  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("display_order", {
      ascending: true,
    })
    .order("created_at", {
      ascending: false,
    });


  if (error) {
    console.error(error);

    return (
      <div className="rounded-xl bg-red-100 p-5 text-red-600">
        Gagal mengambil data gallery.
      </div>
    );
  }


  return (
    <div className="space-y-8">


      {/* HEADER */}
      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Gallery
          </h1>


          <p className="text-gray-500">
            Kelola seluruh foto website.
          </p>

        </div>


        <GalleryUploadDialog />

      </div>



      {/* LIST GALLERY */}
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">


        {data?.map((item) => (

          <div
            key={item.id}
            className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl"
          >


            {/* IMAGE */}
            <Image
              src={item.image_url}
              alt={item.title}
              width={600}
              height={600}
              className="aspect-square object-cover"
            />



            <div className="p-4">


              {/* TITLE */}
              <h2 className="font-semibold">
                {item.title}
              </h2>



              {/* DESCRIPTION */}
              <p className="mt-2 text-sm text-gray-500">
                {item.description}
              </p>



              {/* STATUS */}
              <div className="mt-3 flex flex-wrap gap-2">


                {item.is_favorite && (

                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-600">

                    ❤️ Favorite

                  </span>

                )}



                {item.is_published ? (

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-600">

                    Published

                  </span>

                ) : (

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">

                    Draft

                  </span>

                )}


              </div>




              {/* ACTION */}
              <div className="mt-5 flex justify-end gap-2">


                <EditGalleryDialog
                  gallery={item}
                />



                <DeleteGalleryButton
                  id={item.id}
                  storagePath={
                    item.image_url.split("/").pop()!
                  }
                />


              </div>



            </div>


          </div>


        ))}


      </div>


    </div>
  );
}