import {
  Heart,
  Mail,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  createServerSupabase,
} from "@/lib/supabase/server";


export default async function LetterPage() {

  const supabase =
    await createServerSupabase();


  const { data: letters } =
    await supabase
      .from("love_letters")
      .select("*")
      .eq(
        "is_published",
        true
      )
      .order(
        "created_at",
        {
          ascending:false,
        }
      );


  return (
    <>
      <Navbar />

      <main
        className="
        min-h-screen

        bg-gradient-to-b
        from-rose-50
        via-white
        to-pink-50

        px-6
        py-24
        "
      >

        <section
          className="
          mx-auto
          max-w-4xl
          "
        >

          <div
            className="
            mb-14
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
              Love Letter
            </p>


            <h1
              className="
              mt-4
              text-5xl
              font-bold
              text-gray-800
              "
            >
              Surat Cinta ❤️
            </h1>


            <p
              className="
              mt-5
              text-gray-500
              "
            >
              Sebuah pesan kecil
              yang disimpan selamanya.
            </p>

          </div>



          {
            !letters ||
            letters.length === 0
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
                  Belum ada surat.
                </p>

              </div>

            )
            :
            (

              <div
                className="
                space-y-10
                "
              >

              {
                letters.map(
                  (letter)=> (

                    <article
                      key={
                        letter.id
                      }
                      className="
                      group

                      relative

                      overflow-hidden

                      rounded-[36px]

                      border
                      border-rose-100

                      bg-white

                      p-8

                      shadow-xl

                      transition-all

                      duration-500

                      hover:-translate-y-2

                      hover:shadow-2xl
                      "
                    >

                      <div
                        className="
                        absolute
                        -right-20
                        -top-20

                        h-48
                        w-48

                        rounded-full

                        bg-rose-200/40

                        blur-3xl
                        "
                      />


                      <div
                        className="
                        relative
                        "
                      >

                        <div
                          className="
                          flex
                          items-center
                          gap-3
                          "
                        >

                          <div
                            className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            bg-rose-500
                            text-white
                            "
                          >
                            <Mail />
                          </div>


                          <div>

                            <h2
                              className="
                              text-2xl
                              font-bold
                              text-gray-800
                              "
                            >
                              {
                                letter.title
                              }
                            </h2>


                            <p
                              className="
                              text-sm
                              text-gray-400
                              "
                            >
                              {
                                new Date(
                                  letter.created_at
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

                          </div>

                        </div>



                        <div
                          className="
                          my-8

                          h-px

                          bg-rose-100
                          "
                        />


                        <p
                          className="
                          whitespace-pre-line

                          text-lg

                          leading-9

                          text-gray-600
                          "
                        >
                          {
                            letter.content
                          }
                        </p>



                        <div
                          className="
                          mt-8

                          flex

                          items-center

                          gap-2

                          text-rose-500
                          "
                        >

                          <Heart
                            size={18}
                            fill="currentColor"
                          />

                          <span
                            className="
                            font-semibold
                            "
                          >
                            {
                              letter.sender ??
                              "With Love"
                            }
                          </span>

                        </div>


                      </div>

                    </article>

                  )
                )
              }

              </div>

            )
          }


        </section>

      </main>

      <Footer />
    </>
  );
}