"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

type ItemProps = {
  date: string;
  title: string;
  description: string | null;
  image: string | null;
  index: number;
};

export default function TimelineItem({
  date,
  title,
  description,
  image,
  index,
}: ItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`
        relative
        mb-12
        flex
        w-full
        flex-col
        items-start
        md:flex-row
        md:items-center
        ${isEven ? "md:flex-row-reverse" : ""}
      `}
    >
      <div className="w-full md:w-1/2" />

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className="
          absolute
          left-8
          z-10
          h-5
          w-5
          -translate-x-1/2
          rounded-full
          border-4
          border-rose-500
          bg-white
          shadow-[0_0_20px_rgba(244,63,94,.35)]
          md:left-1/2
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          x: isEven ? 60 : -60,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.6,
        }}
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        className="
          ml-16
          w-[calc(100%-4rem)]
          md:w-full
          md:max-w-[390px]

          rounded-3xl

          border
          border-white/50

          bg-white/70

          p-5

          backdrop-blur-xl

          shadow-lg

          transition-all
          duration-300

          hover:shadow-2xl

          md:ml-0
        "
      >
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-rose-500">
          <Calendar size={15} />
          <span>{date}</span>
        </div>

        <h3 className="mb-4 text-xl font-semibold text-gray-900">
          {title}
        </h3>

        {image && (
          <div className="mb-5 flex justify-center">
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-rose-100
                bg-white
                p-2
                shadow-lg
              "
            >
              <Image
                src={image}
                alt={title}
                width={250} //Iki Ukuran Foto Cak
                height={250} //Iki Ukuran Foto Cak
                className="
                  h-auto
                  max-h-[250px] /* Iki Ukuran Foto Cak */
                  w-auto
                  max-w-full
                  object-contain
                  rounded-xl
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          </div>
        )}

        {description && (
          <p
            className="
              text-sm
              leading-7
              text-gray-600
            "
          >
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}