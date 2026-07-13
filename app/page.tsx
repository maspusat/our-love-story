import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LoveCounter from "@/components/sections/LoveCounter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LoveCounter />
      <Footer />
    </>
  );
}