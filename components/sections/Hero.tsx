import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-rose-100 via-pink-50 to-white">

      <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-300/30 blur-3xl" />

      <div className="relative z-10 text-center">

        <p className="uppercase tracking-[8px] text-rose-500">
          Welcome To
        </p>

        <h1 className="mt-4 text-7xl font-bold text-rose-600">
          {profile.title}
        </h1>

        <div className="mt-12">

          {/* nanti diganti foto */}

          <div className="mx-auto h-48 w-48 rounded-full border-4 border-white bg-white shadow-2xl" />

        </div>

        <div className="mt-10 space-y-2">

          <h2 className="text-5xl font-semibold text-gray-900">
            {profile.groom}
          </h2>

          <p className="text-2xl text-rose-500">❤</p>

          <h2 className="text-5xl font-semibold text-gray-900">
            {profile.bride}
          </h2>

        </div>

        <p className="mx-auto mt-8 max-w-xl text-lg italic text-gray-600">
          {profile.tagline}
        </p>

      </div>

    </section>
  );
}