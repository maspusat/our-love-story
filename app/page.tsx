import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import LoveCounter from "@/components/sections/LoveCounter";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import Timeline from "@/components/sections/Timeline";
import Letter from "@/components/sections/Letter";

import MusicPlayer from "@/components/player/MusicPlayer";

import { createServerSupabase } from "@/lib/supabase/server";

export default async function Home() {
  const supabase =
    await createServerSupabase();

  const { data: settings } =
    await supabase
      .from("settings")
      .select("*")
      .single();

  const { data: galleryData } =
    await supabase
      .from("gallery")
      .select("*")
      .eq(
        "is_published",
        true
      )
      .order(
        "display_order",
        {
          ascending: true,
        }
      );

  const { data: timelineData } =
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
      );

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
          ascending: false,
        }
      );

  return (
    <>
      <Navbar />

      <main>
        <Hero
          data={settings}
        />

        <LoveCounter
          data={settings}
        />

        <Story
          data={settings}
        />

        <Gallery
          data={galleryData ?? []}
        />

        <Timeline
          data={timelineData ?? []}
        />

        <Letter
          data={letters ?? []}
        />

        <MusicPlayer
          url={settings?.music_url ?? null}
          title={
            settings?.music_title ?? null
          }
          artist={
            settings?.music_artist ?? null
          }
        />
      </main>

      <Footer />
    </>
  );
}