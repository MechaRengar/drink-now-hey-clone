import React from "react";
import Link from "next/link";

export function BrandStatement() {
  return (
    <section className="py-24 bg-white text-[#121212] text-center border-t border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-3xl sm:text-5xl font-normal lowercase tracking-tight text-zinc-900">
          nowhey works for you, with you.
        </h2>

        <p className="text-sm sm:text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          nowhey delivers clean, easy-to-digest protein that fits seamlessly into your routine &mdash; no matter how you move.
        </p>

        <div className="pt-2">
          <Link
            href="/collections/frontpage"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black underline underline-offset-8 hover:text-zinc-600 transition-colors"
          >
            find your flavour
          </Link>
        </div>
      </div>
    </section>
  );
}
