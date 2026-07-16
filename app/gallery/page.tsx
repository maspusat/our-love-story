import Image from "next/image";
import { createServerSupabase } from "@/lib/supabase/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function GalleryPage() {
  const supabase = await createServerSupabase();

  const { data: gallery } = await supabase
    .from("gallery")
    .select("*")
    .eq("is_published", true)
    .order("display_order", { ascending: true });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 px-6 py-24">
        <section className="mx-auto max-w-7xl">
          
          
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[6px] text-rose-400">
              Our Memories
            </p>
            <h1 className="mt-4 text-5xl font-bold text-gray-800">
              Gallery ❤️
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-gray-500">
              Kumpulan moment indah perjalanan cinta kami.
            </p>
          </div>

          {!gallery || gallery.length === 0 ? (
            
            <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
              <p className="text-gray-400">
                Belum ada foto yang dipublikasikan.
              </p>
            </div>

          ) : (

            <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
              {gallery.map((item) => (
                <div
                  key={item.id}
                  className="group mb-6 break-inside-avoid overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  
                  <div className="flex items-center justify-center bg-black/5">
                    <Image
                      src={item.image_url}
                      alt={item.title ?? "Gallery"}
                      width={600}
                      height={800}
                      className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {(item.title || item.description) && (
                    <div className="p-5">
                      {item.title && (
                        <h3 className="font-semibold text-gray-800">
                          {item.title}
                        </h3>
                      )}
                      {item.description && (
                        <p className="mt-2 text-sm text-gray-500">
                          {item.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

          )}

        </section>
      </main>

      <Footer />
    </>
  );
}