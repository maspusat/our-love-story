import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-white to-rose-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[8px] text-rose-500">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Our Beautiful Memories
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Every picture tells a story, every memory reminds us
            how beautiful this journey has been.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-[30px] shadow-xl ${
                item.size === "large"
                  ? "lg:row-span-2"
                  : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={700}
                className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                  item.size === "large"
                    ? "h-[600px]"
                    : "h-[290px]"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="flex h-full flex-col items-center justify-center">

                  <div className="rounded-full bg-white/20 p-5 backdrop-blur-md">
                    🔍
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            href="/gallery"
            className="inline-flex rounded-full border border-rose-500 px-8 py-4 font-semibold text-rose-500 transition hover:bg-rose-500 hover:text-white"
          >
            View Full Gallery →
          </Link>

        </div>

      </div>
    </section>
  );
}