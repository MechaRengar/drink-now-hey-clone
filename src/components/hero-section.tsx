import React from "react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] max-h-[850px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Hero Image with Cans in Ice */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/desktopslideshowhero.jpg"
          alt="nowhey cans chilled in ice"
          fill
          priority
          className="object-cover object-center opacity-65 scale-102 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-radial from-black/20 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
      </div>

      {/* Main Hero Copy matching drinknowhey.com */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white lowercase">
          the calorie deficit cheat code
        </h1>

        <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-zinc-200 font-medium tracking-tight">
          20g protein | 86 calories | zero sugar
        </p>

        <p className="mt-4 text-sm sm:text-base font-semibold text-zinc-300 tracking-wide">
          4.8 stars | 100,000+ cans
        </p>

        <div className="mt-8">
          <Link
            href="/products/nowhey-bundle-berry-mango-24-x-330ml"
            className="inline-block px-10 py-3.5 bg-black/80 hover:bg-white text-white hover:text-black border border-white font-extrabold text-sm uppercase tracking-wider transition-all duration-200"
          >
            shop now
          </Link>
        </div>
      </div>
    </section>
  );
}
