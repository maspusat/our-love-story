import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-rose-100 via-pink-50 to-white">
      {/* Background Blur */}
      <div className="absolute -top-20 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-300/20 blur-3xl" />

      <div className="relative z-10 text-center px-6">

        <p className="uppercase tracking-[8px] text-rose-500">
          Welcome To
        </p>

        <h1 className="mt-4 text-6xl md:text-7xl font-bold text-rose-600">
          {profile.title}
        </h1>

        <div className="mt-12 flex justify-center">

          <Image
            src="/images/couple.jpg"
            alt="Atalarik & Rina Eka"
            width={260}
            height={260}
            className="rounded-full border-8 border-white object-cover shadow-2xl"
          />

        </div>

        <h2 className="mt-8 text-4xl font-semibold text-gray-900">
          {profile.groom}
        </h2>

        <p className="mt-2 text-3xl text-rose-500">
          ❤️
        </p>

        <h2 className="mt-2 text-4xl font-semibold text-gray-900">
          {profile.bride}
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg italic text-gray-600">
          {profile.tagline}
        </p>

        <a
          href="#gallery"
          className="mt-10 inline-block rounded-full bg-rose-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-rose-600 hover:shadow-xl"
        >
          Explore Memories ❤️
        </a>

      </div>
    </section>
  );
}