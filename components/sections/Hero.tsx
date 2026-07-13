export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-pink-200 via-rose-100 to-white">
      <div className="text-center">

        <p className="text-sm uppercase tracking-[6px] text-rose-500">
          Welcome To
        </p>

        <h1 className="mt-3 text-6xl font-bold text-rose-600">
          Our Love Story
        </h1>

        <div className="mt-10 space-y-2">

          <h2 className="text-4xl font-semibold text-gray-900">
            Atalarik
          </h2>

          <p className="text-2xl text-gray-500">
            &
          </p>

          <h2 className="text-4xl font-semibold text-gray-900">
            Rina Eka
          </h2>

        </div>

        <p className="mt-8 text-lg italic text-gray-600">
          Every love story is beautiful,
          <br />
          but ours is my favorite.
        </p>

        <button
          className="mt-10 rounded-full bg-rose-500 px-8 py-3 font-semibold text-white transition hover:bg-rose-600"
        >
          Enter Our Story ❤️
        </button>

      </div>
    </section>
  );
}