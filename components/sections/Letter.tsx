"use client";

import Link from "next/link";

type LetterItem = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  data: LetterItem[];
};

export default function Letter({
  data,
}: Props) {
  return (
    <section
      id="letter"
      className="bg-gradient-to-b from-rose-50 to-white py-28"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="uppercase tracking-[8px] text-rose-500">
            Love Letter
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            A Letter For You ❤️
          </h2>

          <p className="mt-6 text-gray-600">
            A little message from my heart to yours.
          </p>
        </div>

        {/* Letter List */}
        <div className="mt-16 space-y-8">
          {data.length === 0 && (
            <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
              <p className="text-gray-500">
                Belum ada surat cinta ❤️
              </p>
            </div>
          )}

          {data.map((item) => (
            <div
              key={item.id}
              className="
                relative
                overflow-hidden
                rounded-[30px]
                bg-white
                p-10
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              {/* Background Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-32
                  w-32
                  rounded-full
                  bg-rose-100
                  blur-3xl
                "
              />

              <div className="relative">
                <h3 className="text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <div
                  className="
                    mt-6
                    whitespace-pre-line
                    leading-8
                    text-gray-600
                  "
                >
                  {item.content}
                </div>

                <div className="mt-8 text-right text-2xl">
                  ❤️
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {data.length > 0 && (
          <div className="mt-14 flex justify-center">
            <Link
              href="/letter"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-rose-200
                bg-white/70
                px-7
                py-3
                text-sm
                font-medium
                text-rose-500
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-rose-400
                hover:bg-rose-500
                hover:text-white
                hover:shadow-xl
              "
            >
              Read All Letters

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}