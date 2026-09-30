import React from "react";
import Image from "next/image";

export function StockedIn() {
  return (
    <section className="py-14 bg-white border-t border-black/5 text-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl sm:text-2xl font-normal lowercase tracking-tight text-zinc-800 mb-8">
          stocked in
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-80 hover:opacity-100 transition-opacity">
          <div className="relative w-36 h-12 grayscale hover:grayscale-0 transition-all">
            <Image
              src="/images/Tropicana_Logo.png"
              alt="Tropicana Wholesale"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-36 h-12 grayscale hover:grayscale-0 transition-all">
            <Image
              src="/images/PB_Logo.png"
              alt="Protein Bargain Wholesale"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-36 h-12 grayscale hover:grayscale-0 transition-all">
            <Image
              src="/images/Occa_Logo.png"
              alt="Occa Store Wholesale"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
