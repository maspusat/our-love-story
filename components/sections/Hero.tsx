import Image from "next/image";
import Link from "next/link";

import { profile } from "@/data/profile";
import { calculateLoveDays } from "@/utils/date";

export default function Hero() {
  const totalDays = calculateLoveDays(profile.anniversary);

  const anniversaryDate = new Date(profile.anniversary).toLocaleDateString(
    "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-rose-100 via-pink-50 to-white px-6">
      {/* Background Glow */}
      <div className="absolute -top-20 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-300/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/20 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-3xl rounded-[40px] border border-white/40 bg-white/50 px-10 py-16 text-center shadow-2xl backdrop-blur-xl">

        <p className="text-sm uppercase tracking-[8px] text-rose-500">
          Welcome To
        </p>

        <h1 className="mt-4 text-5xl font-bold text-rose-600 md:text-7xl">
          {profile.title}
        </h1>

        {/* Photo */}
        <div className="mt-12 flex justify-center">
          <Image
            src="/images/couple.jpg"
            alt={`${profile.groom} & ${profile.bride}`}
            width={260}
            height={260}
            priority
            className="rounded-full border-8 border-white object-cover shadow-2xl"
          />
        </div>

        {/* Couple */}
        <h2 className="mt-10 text-4xl font-semibold text-gray-900 md:text-5xl">
          {profile.groom}
        </h2>

        <p className="mt-2 text-3xl">❤️</p>

        <h2 className="mt-2 text-4xl font-semibold text-gray-900 md:text-5xl">
          {profile.bride}
        </h2>

        {/* Since */}
        <p className="mt-8 text-sm uppercase tracking-[6px] text-amber-600">
          Since {anniversaryDate}
        </p>

        {/* Counter */}
        <h3 className="mt-6 text-6xl font-bold text-rose-600">
          {totalDays}
        </h3>

        <p className="text-lg text-gray-600">
          Days Together ❤️
        </p>

        {/* Tagline */}
        <p className="mx-auto mt-10 max-w-xl text-lg italic leading-8 text-gray-600">
          "{profile.tagline}"
        </p>

        {/* Button */}
        <div className="mt-12">
          <Link
            href="#gallery"
            className="inline-flex rounded-full bg-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-rose-600 hover:shadow-2xl"
          >
            Explore Our Memories →
          </Link>
        </div>

        {/* Scroll */}
        <div className="mt-12 animate-bounce text-3xl text-rose-500">
          ↓
        </div>
      </div>
    </section>
  );
}