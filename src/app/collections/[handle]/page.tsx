"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function CollectionPage() {
  const products = getAllProducts();
  const { addToCart } = useCart();
  const [filter, setFilter] = useState<"all" | "cans" | "merch">("all");

  const filteredProducts = products.filter((p) => {
    if (filter === "cans") return p.canCount > 0;
    if (filter === "merch") return p.canCount === 0;
    return true;
  });

  return (
    <div className="bg-white text-[#121212] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            the nowhey collection
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal lowercase tracking-tight text-zinc-900 mt-2">
            choose your flavour
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-3">
            20g clean plant-based pea protein peptides. 86 calories. zero sugar.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                filter === "all"
                  ? "bg-black text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              all items
            </button>
            <button
              onClick={() => setFilter("cans")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                filter === "cans"
                  ? "bg-black text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              protein cans
            </button>
            <button
              onClick={() => setFilter("merch")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                filter === "merch"
                  ? "bg-black text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              apparel
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group flex flex-col bg-[#f8f8f8] hover:bg-[#f2f2f2] rounded-2xl overflow-hidden border border-black/5 hover:border-black/15 transition-all p-5 relative shadow-xs"
            >
              {prod.badge && (
                <span className="absolute top-4 right-4 bg-[#c6f91f] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full z-10">
                  {prod.badge}
                </span>
              )}

              <Link href={`/products/${prod.handle}`} className="block relative aspect-square w-full my-4">
                <Image
                  src={prod.featuredImage}
                  alt={prod.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <div className="mt-auto space-y-2 pt-2 border-t border-black/5">
                <Link href={`/products/${prod.handle}`}>
                  <h3 className="text-sm font-bold text-zinc-900 group-hover:text-black line-clamp-2">
                    {prod.title}
                  </h3>
                </Link>

                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold font-mono text-black">
                    {formatPrice(prod.price)}
                  </span>
                  {prod.perCanPrice && (
                    <span className="text-[11px] text-zinc-500 font-medium">
                      {prod.perCanPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => addToCart(prod, 1, false)}
                  className="w-full mt-3 py-2.5 bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>quick add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
