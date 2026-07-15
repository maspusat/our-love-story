import Image from "next/image";

import {
  createServerSupabase,
} from "@/lib/supabase/server";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


export default async function MemoriesPage() {

  const supabase =
    await createServerSupabase();


  const { data: memories } =
    await supabase
      .from("memories")
      .select("*")
      .eq(
        "is_published",
        true
      )
      .order(
        "memory_date",
        {
          ascending:true,
        }
      );


  return (
    <>
      <Navbar />


      <main
        className="
        min-h-screen
        bg-gradient-to-b
        from-pink-50
        via-white
        to-rose-50

        px-6
        py-24
        "
      >

        <section
          className="
          mx-auto
          max-w-5xl
          "
        >


          <div
            className="
            mb-16
            text-center
            "
          >

            <p
              className="
              text-sm
              font-semibold
              uppercase
              tracking-[6px]
              text-rose-400
              "
            >
              Our Journey
            </p>


            <h1
              className="
              mt-4
              text-5xl
              font-bold
              text-gray-800
              "
            >
              Memories ❤️
            </h1>


            <p
              className="
              mt-5
              text-gray-500
              "
            >
              Setiap perjalanan memiliki
              cerita yang indah.
            </p>

          </div>



          {
            !memories ||
            memories.length === 0
            ? (

              <div
                className="
                rounded-3xl
                bg-white
                p-10
                text-center
                shadow-xl
                "
              >

                <p
                  className="
                  text-gray-400
                  "
                >
                  Belum ada memories.
                </p>

              </div>

            )
            :
            (

              <div
                className="
                relative
                "
              >


                <div
                  className="
                  absolute
                  left-5
                  top-0
                  h-full
                  w-1
                  rounded-full
                  bg-rose-200
                  md:left-1/2
                  "
                />



                <div
                  className="
                  space-y-12
                  "
                >

                {
                  memories.map(
                    (
                      item,
                      index
                    ) => (

                      <div
                        key={
                          item.id
                        }
                        className={`
                        relative
                        flex

                        ${
                          index % 2 === 0
                          ? "md:flex-row"
                          : "md:flex-row-reverse"
                        }

                        items-center
                        gap-8
                        `}
                      >


                        <div
                          className="
                          absolute
                          left-3

                          h-5
                          w-5

                          rounded-full

                          bg-rose-500

                          ring-8
                          ring-rose-100

                          md:left-1/2
                          md:-translate-x-1/2
                          "
                        />



                        <div
                          className="
                          w-full
                          md:w-1/2
                          "
                        >

                          <div
                            className="
                            overflow-hidden

                            rounded-[32px]

                            bg-white

                            shadow-xl

                            transition

                            hover:-translate-y-2
                            "
                          >

                          {
                            item.image_url && (

                              <Image

                                src={
                                  item.image_url
                                }

                                alt={
                                  item.title
                                }

                                width={800}

                                height={600}

                                className="
                                h-72
                                w-full
                                object-cover
                                "
                              />

                            )
                          }



                          <div
                            className="
                            p-6
                            "
                          >

                            <p
                              className="
                              text-sm
                              font-semibold
                              text-rose-400
                              "
                            >
                              {
                                new Date(
                                  item.memory_date
                                )
                                .toLocaleDateString(
                                  "id-ID",
                                  {
                                    day:"numeric",
                                    month:"long",
                                    year:"numeric",
                                  }
                                )
                              }
                            </p>


                            <h2
                              className="
                              mt-3
                              text-2xl
                              font-bold
                              text-gray-800
                              "
                            >
                              {
                                item.title
                              }
                            </h2>


                            <p
                              className="
                              mt-3
                              leading-7
                              text-gray-500
                              "
                            >
                              {
                                item.description
                              }
                            </p>


                          </div>


                          </div>

                        </div>


                      </div>

                    )
                  )
                }

                </div>


              </div>

            )
          }


        </section>

      </main>


      <Footer />

    </>
  );
}