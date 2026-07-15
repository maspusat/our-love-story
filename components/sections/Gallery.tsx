import Image from "next/image";
import Link from "next/link";


type GalleryItem = {
  id: string;
  title: string;
  description?: string;
  image_url: string;
};


type Props = {
  data: GalleryItem[];
};



export default function Gallery({
  data,
}: Props) {


  return (

    <section
      id="gallery"
      className="
      bg-gradient-to-b
      from-white
      to-rose-50
      py-28
      "
    >


      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >



        {/* Header */}

        <div className="text-center">


          <p
            className="
            uppercase
            tracking-[8px]
            text-rose-500
            "
          >
            Gallery
          </p>



          <h2
            className="
            mt-4
            text-5xl
            font-bold
            text-gray-900
            "
          >
            Our Beautiful Memories
          </h2>



          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            text-gray-600
            "
          >
            Every picture tells a story, every memory reminds us
            how beautiful this journey has been.
          </p>


        </div>





        {/* Masonry Gallery */}


        <div
          className="
          mt-20
          columns-1
          gap-6
          md:columns-2
          lg:columns-3
          "
        >


          {
            data.map((item)=>(


              <div
                key={item.id}
                className="
                group
                mb-6
                break-inside-avoid
                overflow-hidden
                rounded-[30px]
                bg-white
                shadow-xl
                "
              >



                <div
                  className="
                  relative
                  overflow-hidden
                  "
                >



                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={700}
                    height={900}
                    className="
                    h-auto
                    w-full
                    object-contain
                    transition
                    duration-700
                    group-hover:scale-105
                    "
                  />



                  {/* Overlay */}

                  <div
                    className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/20
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                    "
                  >


                    <div
                      className="
                      rounded-full
                      bg-white/30
                      p-5
                      text-3xl
                      backdrop-blur-md
                      "
                    >
                      🔍
                    </div>


                  </div>


                </div>





                <div
                  className="
                  p-5
                  "
                >


                  <h3
                    className="
                    text-xl
                    font-semibold
                    "
                  >
                    {item.title}
                  </h3>



                  {
                    item.description &&
                    <p
                      className="
                      mt-2
                      text-sm
                      text-gray-500
                      "
                    >
                      {item.description}
                    </p>
                  }


                </div>



              </div>


            ))
          }


        </div>





        <div
          className="
          mt-16
          text-center
          "
        >

          <Link
            href="/gallery"
            className="
            inline-flex
            rounded-full
            border
            border-rose-500
            px-8
            py-4
            font-semibold
            text-rose-500
            transition
            hover:bg-rose-500
            hover:text-white
            "
          >
            View Full Gallery →
          </Link>


        </div>




      </div>


    </section>

  );

}