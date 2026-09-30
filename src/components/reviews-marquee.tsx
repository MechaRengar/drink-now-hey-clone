"use client";

import React, { useRef } from "react";
import { Star } from "lucide-react";

interface ReviewItem {
  id: string;
  video: string;
  quote: string;
  author: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "1",
    video: "/images/4728e0efe3874a48941a645024598aab.HD-1080p-7.2Mbps-47240651.mp4",
    quote: "these are the tastiest protein drinks I've ever tested. I'll absolutely be looking to supply these to my members at the gym. a great product.",
    author: "alex henderson – verified buyer",
  },
  {
    id: "2",
    video: "/images/856e3b082db64829878f365af3b91e2e.HD-1080p-7.2Mbps-47318362.mp4",
    quote: "wouldn't think it was a protein product, tastes like juice and only 86 cals amazing !!",
    author: "thomas rose – verified buyer",
  },
  {
    id: "3",
    video: "/images/531dc857a0e340d0bc655e8bf402ed55.HD-1080p-7.2Mbps-47318361.mp4",
    quote: "has 20g protein and tastes exactly like fruit juice. no milky aftertaste whatsoever.",
    author: "samuel k. – verified buyer",
  },
  {
    id: "4",
    video: "/images/d2892ccbd406443691684202f0f63c6f.HD-1080p-7.2Mbps-47318360.mp4",
    quote: "by far the cleanest protein drink on the market. perfect cold out of the fridge post-run.",
    author: "charlie linton – verified buyer",
  },
];

export function ReviewsMarquee() {
  return (
    <section className="py-20 bg-[#121212] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight lowercase">
          reviews from our athletes &amp; community
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto px-4 sm:px-8 pb-6 no-scrollbar snap-x">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="w-72 sm:w-80 shrink-0 bg-[#181818] rounded-2xl overflow-hidden border border-white/10 flex flex-col snap-center group hover:border-[#c6f91f]/40 transition-colors"
          >
            {/* Video container */}
            <div className="relative aspect-9/16 w-full bg-black overflow-hidden">
              <video
                src={rev.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Testimonial info */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                &ldquo;{rev.quote}&rdquo;
              </p>

              <div>
                <p className="text-[11px] font-bold text-white lowercase">
                  {rev.author}
                </p>
                <div className="flex text-[#c6f91f] mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c6f91f]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
