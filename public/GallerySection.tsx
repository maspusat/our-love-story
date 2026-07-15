"use client";

import Image from "next/image";
import { useState } from "react";

type Gallery = {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  is_favorite: boolean;
};


export default function GallerySection({
  data,
}: {
  data: Gallery[];
}) {

  const [selected, setSelected] =
    useState<Gallery | null>(null);


  return (
    <section className="space-y-10">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-rose-600">
          Our Memories ❤️
        </h2>

        <p className="mt-3 text-gray-500">
          Momen kecil yang menjadi cerita besar.
        </p>

      </div>


      <div className="
        grid
        grid-cols-2
        gap-5
        md:grid-cols-3
        lg:grid-cols-4
      ">

        {data.map((item)=>(
          
          <div
            key={item.id}
            onClick={() =>
              setSelected(item)
            }
            className="
              group
              cursor-pointer
              overflow-hidden
              rounded-3xl
              bg-white
              shadow
            "
          >

            <div className="relative aspect-square">

              <Image
                src={item.image_url}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                "
              />


              {item.is_favorite && (

                <div className="
                  absolute
                  top-3
                  right-3
                  rounded-full
                  bg-white
                  px-3
                  py-1
                  text-sm
                ">
                  ❤️
                </div>

              )}

            </div>


            <div className="p-4">

              <h3 className="font-semibold">
                {item.title}
              </h3>

            </div>


          </div>

        ))}

      </div>



      {selected && (

        <div
          onClick={() =>
            setSelected(null)
          }
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            p-5
          "
        >

          <div
            className="
              relative
              max-h-[90vh]
              max-w-5xl
            "
            onClick={(e)=>
              e.stopPropagation()
            }
          >

            <Image
              src={selected.image_url}
              alt={selected.title}
              width={1200}
              height={800}
              className="
                rounded-3xl
                object-contain
              "
            />

          </div>

        </div>

      )}

    </section>
  );
}