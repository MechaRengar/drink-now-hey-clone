"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="bg-[#c6f91f] text-black py-12 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase font-mono">
            keep up with nowhey.
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-black/80 mt-1">
            get early access to new flavour drops, athlete stories, and exclusive subscriber perks.
          </p>
        </div>

        {subscribed ? (
          <div className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider">
            <Check className="w-4 h-4 text-[#c6f91f]" />
            <span>You&apos;re on the VIP list</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email..."
              className="bg-black/10 border border-black/20 text-black placeholder-black/60 px-5 py-3 rounded-full text-xs font-bold focus:outline-none focus:bg-white transition-all w-full sm:w-72"
            />
            <button
              type="submit"
              className="bg-black hover:bg-zinc-800 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <span>Join</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
