import React from "react";
import Image from "next/image";

const FEATURES = [
  {
    image: "/images/J8A0514.jpg",
    title: "real protein, no compromise",
    description:
      "protein without the shake. nowhey delivers 20g of clean, bioavailable plant-based protein in a light, fruit-flavoured can. no chalky texture, no dairy, just clean fuel for real progress.",
  },
  {
    image: "/images/Berry_Infographic_ad7d137c-d832-4cac-b849-0081b1772238.png",
    title: "zero sugar, low calorie",
    description:
      "designed to fit seamlessly into any calorie deficit or lean maintenance phase. only 86 calories per can and 0g sugar so you can hit your protein targets without wasting your calorie budget.",
  },
  {
    image: "/images/DSC05709.jpg",
    title: "ready-to-drink convenience",
    description:
      "no foul shaker bottles left in gym bags. no messy powder scoops or clumping. simply pop the tab on an ice-cold can after workouts or while on the go.",
  },
];

export function FeatureCards() {
  return (
    <section className="py-16 bg-white text-[#121212] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl overflow-hidden bg-[#f9f9f9] border border-black/5 p-6 hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden mb-6 bg-zinc-200">
                <Image
                  src={feat.image}
                  alt={feat.title}
                  fill
                  className="object-cover hover:scale-103 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 lowercase mb-3">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
