import { createServerSupabase } from "@/lib/supabase/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryList from "./GalleryList"; 

export default async function GalleryPage() {
  const supabase = await createServerSupabase();

  const { data: gallery } = await supabase
    .from("gallery")
    .select("*")
    .eq("is_published", true)
    .order("display_order", { ascending: true });

  return (
    <>
      
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes customSlideUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `,
        }}
      />

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 px-6 py-24">
        <section className="mx-auto max-w-7xl">
          
          {/* Header Section */}
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

            <GalleryList initialItems={gallery} />

          )}

        </section>
      </main>

      <Footer />
    </>
  );
}