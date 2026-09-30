import React from "react";
import Link from "next/link";
import { Check, X, CheckCircle2 } from "lucide-react";

export function ComparisonTable() {
  const metrics = [
    { label: "pdcaas (egg being 1.00)", pea: "0.89", collagen: "0.00" },
    { label: "leucine %", pea: "8.8", collagen: "2.1" },
    { label: "valine %", pea: "5.2", collagen: "1.9" },
    { label: "isoleucine %", pea: "4.9", collagen: "1.1" },
    { label: "tryptophan %", pea: "0.4", collagen: "0.00" },
    { label: "plant-based", pea: "yes", collagen: "no" },
  ];

  return (
    <section className="py-24 bg-[#121212] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context and Copy */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight lowercase">
              not all protein is built equal
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              some collagen protein products claim to support muscle repair and growth, but unless they&apos;re fortified with additional amino acids, they simply can&apos;t perform.
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                for muscle protein synthesis, we look at:
              </p>
              <ul className="space-y-2.5 text-sm text-zinc-200">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>protein digestibility corrected amino acid score</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>leucine levels</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>valine levels</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>isoleucine levels</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>tryptophan levels</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/products/nowhey-bundle-berry-mango-24-x-330ml"
                className="inline-block px-8 py-3.5 bg-white text-black hover:bg-zinc-200 font-extrabold text-xs uppercase tracking-wider transition-colors rounded-none"
              >
                shop now
              </Link>
            </div>
          </div>

          {/* Right Column: Comparative Data Table */}
          <div className="lg:col-span-6">
            <div className="border border-white/20 rounded-2xl overflow-hidden bg-[#181818]">
              <div className="grid grid-cols-12 text-center border-b border-white/20 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <div className="col-span-5 p-4 text-left text-zinc-400 bg-white/5">
                  Metric
                </div>
                <div className="col-span-4 p-4 bg-white text-black font-extrabold">
                  pea protein
                </div>
                <div className="col-span-3 p-4 bg-[#141414] text-zinc-400">
                  collagen
                </div>
              </div>

              <div className="divide-y divide-white/10 text-xs sm:text-sm">
                {metrics.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 items-center text-center">
                    <div className="col-span-5 p-3.5 text-left text-zinc-300 font-medium pl-4">
                      {row.label}
                    </div>
                    <div className="col-span-4 p-3.5 bg-white/5 font-bold text-white flex items-center justify-center">
                      {row.pea === "yes" ? (
                        <Check className="w-5 h-5 text-[#c6f91f]" />
                      ) : (
                        row.pea
                      )}
                    </div>
                    <div className="col-span-3 p-3.5 text-zinc-500 font-normal flex items-center justify-center">
                      {row.collagen === "no" ? (
                        <X className="w-4 h-4 text-red-500" />
                      ) : (
                        row.collagen
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[10px] text-zinc-500 mt-4 leading-normal text-center">
              a variety of protein sources in diet is recommended. pea protein data based on analysis of actual pea protein used in nowhey. collagen data from study on cosmetic potential of marine fish skin collagen (specifically codfish skin).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
