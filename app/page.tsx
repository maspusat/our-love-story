import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import LoveCounter from "@/components/sections/LoveCounter";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import Timeline from "@/components/sections/Timeline";
import Letter from "@/components/sections/Letter";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <LoveCounter />

        <Story />

        <Gallery />

        <Timeline />

        <Letter />

      </main>

      <Footer />
    </>
  );
}