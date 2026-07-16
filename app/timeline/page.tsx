import { createServerSupabase } from "@/lib/supabase/server";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Timeline from "@/components/sections/timeline/Timeline";

export const metadata = {
  title: "Our Journey | Our Love Story",
  description:
    "Perjalanan cinta manis kami dari awal bertemu hingga saat ini.",
};

export default async function TimelinePage() {
  const supabase =
    await createServerSupabase();

  const { data: timelineData, error } =
    await supabase
      .from("timeline")
      .select("*")
      .eq(
        "is_published",
        true
      )
      .order(
        "event_date",
        {
          ascending: true,
        }
      )
      .order(
        "display_order",
        {
          ascending: true,
        }
      );

  if (error) {
    console.error(error);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <Timeline
          data={
            timelineData ?? []
          }
        />
      </main>

      <Footer />
    </>
  );
}