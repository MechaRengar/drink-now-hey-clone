import React from "react";
import Image from "next/image";

const IMAGES = [
  "/images/fixedwidth.png",
  "/images/fixedwidth2.png",
  "/images/fixedwidth3.png",
  "/images/fixedwidth4.png",
  "/images/fixedwidth5.png",
  "/images/fixedwidth7.png",
  "/images/fixedwidth8.png",
  "/images/fixedwidth9.png",
  "/images/fixedwidth10.png",
  "/images/fixedwidth12.png",
];

export function LifestyleGallery() {
  return (
    <section className="py-20 bg-white text-[#121212] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-2xl sm:text-4xl font-normal lowercase tracking-tight text-zinc-900 mb-2">
          more than a protein drink
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 font-medium">
          tag us on instagram to see your picture featured here.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 px-2 sm:px-4 max-w-7xl mx-auto">
        {IMAGES.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-square overflow-hidden bg-zinc-100 group"
          >
            <Image
              src={src}
              alt={`Community post ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
