import Image from "next/image";
import Link from "next/link";

type GalleryItem = {
  id: string;
  title: string;
  description?: string;
  image_url: string;
};

type Props = {
  data: GalleryItem[];
};

export default function Gallery({ data }: Props) {
  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-white to-rose-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="uppercase tracking-[8px] text-rose-500">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Our Beautiful Memories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Every picture tells a story, every memory reminds us how beautiful
            this journey has been.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-[28px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={700}
                  height={900}
                  className="h-auto w-full object-contain transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-5 text-3xl backdrop-blur-xl">
                    🔍
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/gallery"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-rose-200
              bg-white/80
              px-7
              py-3.5
              font-medium
              text-rose-500
              shadow-md
              backdrop-blur
              transition-all
              duration-300
              hover:border-rose-500
              hover:bg-rose-500
              hover:text-white
              hover:shadow-xl
            "
          >
            View Full Gallery
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}