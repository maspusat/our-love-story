import Image from "next/image";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-4xl font-bold text-rose-600">
          Our Journey ❤️
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Every beautiful memory we have shared together.
        </p>

        <div className="mt-16 space-y-10">
          {timeline.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-6 rounded-3xl bg-rose-50 p-6 shadow-md md:flex-row"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={220}
                height={220}
                className="h-56 w-full rounded-2xl object-cover md:w-56"
              />

              <div className="flex-1">
                <p className="text-sm text-rose-500">
                  {new Date(item.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}