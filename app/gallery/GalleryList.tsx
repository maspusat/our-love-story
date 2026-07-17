"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  image_url: string;
  title: string | null;
  description: string | null;
}

interface GalleryListProps {
  initialItems: GalleryItem[];
}

export default function GalleryList({ initialItems }: GalleryListProps) {
  const ITEMS_PER_PAGE = 20;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleItems = initialItems.slice(0, visibleCount);
  const hasMore = visibleCount < initialItems.length;

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <>
      {/* Pinterest Layout */}
      <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            style={{
              animation: `customSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${
                (index % ITEMS_PER_PAGE) * 60
              }ms forwards`,
            }}
            className="group mb-6 break-inside-avoid overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0"
          >
            <div className="flex items-center justify-center bg-black/5">
              <Image
                src={item.image_url}
                alt={item.title ?? "Gallery"}
                width={600}
                height={800}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                priority={index < 10} 
              />
            </div>

            {(item.title || item.description) && (
              <div className="p-5">
                {item.title && (
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="mt-2 text-sm text-gray-500">
                    {item.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      
      {hasMore && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleViewMore}
            className="rounded-full bg-rose-500 px-8 py-3.5 font-semibold text-white shadow-md shadow-rose-200 transition-all duration-300 hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-300 active:scale-95"
          >
            View More ❤️
          </button>
        </div>
      )}
    </>
  );
}