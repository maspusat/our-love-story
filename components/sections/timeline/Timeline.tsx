"use client";

import TimelineHeader from "./TimelineHeader";
import TimelineLine from "./TimelineLine";
import TimelineItem from "./TimelineItem";
import TimelineFooter from "./TimelineFooter";
import FloatingHearts from "./FloatingHearts";

type TimelineItemType = {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  image_url: string |null;
};

type Props = {
  data: TimelineItemType[];
  isHome?: boolean;
};

export default function Timeline({
  data,
  isHome = false,
}: Props) {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-rose-50/30
        to-white
        px-4
        py-24
      "
    >
      <FloatingHearts />

      <div className="relative mx-auto max-w-5xl">

        <TimelineHeader />

        <div className="relative mt-12">

          <TimelineLine />

          {data.map((item, index) => (
            <TimelineItem
              key={item.id}
              index={index}
              date={item.event_date}
              title={item.title}
              description={item.description}
              image={item.image_url}
            />
          ))}

        </div>

        {isHome ? (
          <div className="mt-16 text-center">

            <a
              href="/timeline"
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
                hover:shadow-[0_20px_40px_rgba(244,63,94,.25)]
                active:scale-95
              "
            >
              Continue Our Journey

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </a>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-500">
              Every love story has more beautiful chapters
              waiting to unfold.
            </p>

          </div>
        ) : (
          <TimelineFooter />
        )}

      </div>
    </section>
  );
}