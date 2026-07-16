import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LoveCounter from "@/components/sections/LoveCounter";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import Timeline from "@/components/sections/timeline/Timeline";
import Letter from "@/components/sections/Letter";
import MusicPlayer from "@/components/player/MusicPlayer";
import BirthdayModal from "@/components/birthday/BirthdayModal";
import { createServerSupabase } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createServerSupabase();

  const { data: settings } = await supabase
    .from("settings")
    .select("*")
    .single();

  const { data: galleryData } = await supabase
    .from("gallery")
    .select("*")
    .eq("is_published", true)
    .order("display_order", { ascending: true });

  const { data: timelineData } = await supabase
    .from("timeline")
    .select("*")
    .eq("is_published", true)
    .order("event_date", { ascending: true })
    .order("display_order", { ascending: true });

  const { data: letters } = await supabase
    .from("love_letters")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  const randomGallery = [...(galleryData ?? [])]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  const homeTimeline = (timelineData ?? []).slice(0, 3);

  const homeLetter = (letters ?? [])
    .filter((item) => {
      const created = new Date(item.created_at);
      const now = new Date();
      const diff = now.getTime() - created.getTime();
      return diff < 24 * 60 * 60 * 1000;
    })
    .slice(0, 1);

  return (
    <>
      <BirthdayModal
        groomBirthday={settings?.birthday_groom ?? null}
        brideBirthday={settings?.birthday_bride ?? null}
        groomName={settings?.groom_name ?? null}
        brideName={settings?.bride_name ?? null}
      />

      <Navbar />

      <main>
        <Hero data={settings} />

        <LoveCounter data={settings} />

        <Story data={settings} />

        <Gallery data={randomGallery} />

        <Timeline data={homeTimeline} isHome />

        <Letter data={homeLetter} />

        <MusicPlayer
          url={settings?.music_url ?? null}
          title={settings?.music_title ?? null}
          artist={settings?.music_artist ?? null}
          cover={settings?.music_cover ?? null}
        />
      </main>

      <Footer />
    </>
  );
}