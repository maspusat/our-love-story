import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import LoveCounter from "@/components/sections/LoveCounter";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import Letter from "@/components/sections/Letter";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <LoveCounter />

      <Story />

      <Gallery />

      <Letter />

      <Footer />
    </>
  );
}