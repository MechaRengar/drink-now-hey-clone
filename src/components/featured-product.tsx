"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { getProductByHandle } from "@/data/products";
import { Check, Truck, RefreshCw, Star, Minus, Plus, ArrowRight } from "lucide-react";

export function FeaturedProduct() {
  const { addToCart } = useCart();
  const product = getProductByHandle("nowhey-bundle-berry-mango-24-x-330ml")!;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isSubscription, setIsSubscription] = useState(true);
  const [subscriptionFrequency, setSubscriptionFrequency] = useState(
    "deliver every 3 weeks (most popular) | 8 cans per week"
  );
  const [quantity, setQuantity] = useState(1);
  const [tshirtSize, setTshirtSize] = useState("M");

  const images = product.images;

  // Regular price: £59.40, Subscription price (19% off): £53.46
  const currentUnitPrice = isSubscription ? 5346 : 5940;

  const handleAddToCart = () => {
    addToCart(product, quantity, isSubscription, subscriptionFrequency);
  };

  return (
    <section className="py-20 bg-white text-[#121212]" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square w-full bg-[#f2f2f2] rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-black/5">
              <Image
                src={images[activeImageIdx] || product.featuredImage}
                alt={product.title}
                fill
                priority
                className="object-contain p-4 transition-all duration-300"
              />
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-[#f5f5f5] p-2 border-2 transition-all cursor-pointer ${
                    activeImageIdx === idx
                      ? "border-black"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Buy Box Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-normal lowercase tracking-tight text-zinc-900 leading-tight">
                nowhey cans – mixed bundle <br />
                24 x 330ml
              </h2>

              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-black font-mono">
                  £59.40
                </span>
                <span className="text-base text-zinc-400 line-through">
                  £66.00
                </span>
              </div>

              <p className="mt-2 text-xs text-zinc-500">
                pay in 3 interest-free instalments of £19.80 with{" "}
                <strong className="text-indigo-600">shop pay</strong>
              </p>
            </div>

            {/* Key benefits bullet list */}
            <div className="space-y-1.5 text-xs text-zinc-700">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black shrink-0" />
                <span>support lean muscle repair without excess calories</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black shrink-0" />
                <span>protein on-the-go, anytime, anywhere</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black shrink-0" />
                <span>100% vegan-friendly and allergen-free</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-black shrink-0" />
                <span>easy to digest</span>
              </div>
            </div>

            {/* Quantity Stepper */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 lowercase mb-2">
                quantity
              </label>
              <div className="inline-flex items-center border border-black/20 rounded-md bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2.5 hover:bg-zinc-100 transition-colors text-zinc-600"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm font-bold font-mono">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 hover:bg-zinc-100 transition-colors text-zinc-600"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Subscription vs One-Time Purchase Box */}
            <div className="border border-black/15 rounded-2xl overflow-hidden bg-white shadow-xs">
              {/* Discount pill header */}
              <div className="bg-[#e94ad8] text-white py-1.5 px-4 text-center text-xs font-bold uppercase tracking-wider">
                save 19% on every delivery
              </div>

              {/* Option 1: Subscription */}
              <div
                onClick={() => setIsSubscription(true)}
                className={`p-5 cursor-pointer transition-colors ${
                  isSubscription ? "bg-[#f2f2f2]" : "hover:bg-zinc-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={isSubscription}
                      onChange={() => setIsSubscription(true)}
                      className="w-4 h-4 accent-black"
                    />
                    <span className="text-sm font-bold text-black lowercase">
                      regular refill
                    </span>
                    <span className="bg-[#e94ad8]/15 text-[#e94ad8] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      19% off
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold font-mono text-black">
                      £53.46
                    </span>
                    <span className="block text-[11px] text-zinc-400 line-through">
                      £66.00
                    </span>
                  </div>
                </div>

                {/* Sub details when selected */}
                {isSubscription && (
                  <div className="mt-4 pt-4 border-t border-black/10 space-y-3">
                    <p className="text-xs font-bold text-zinc-800 lowercase">
                      how subscriptions work:
                    </p>
                    <div className="space-y-1 text-xs text-zinc-600">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-black" />
                        <span>19% off all recurring orders.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-black" />
                        <span>no commitment, cancel any time.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-black" />
                        <span>cheapest option</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-black" />
                        <span>easily swap &amp; skip deliveries</span>
                      </div>
                    </div>

                    {/* Frequency Dropdown */}
                    <div className="mt-3">
                      <select
                        value={subscriptionFrequency}
                        onChange={(e) => setSubscriptionFrequency(e.target.value)}
                        className="w-full text-xs font-semibold bg-white border border-black/20 rounded-lg p-2.5 text-zinc-800"
                      >
                        <option>deliver every 3 weeks (most popular) | 8 cans per week</option>
                        <option>deliver every 2 weeks | 12 cans per week</option>
                        <option>deliver every 4 weeks | 6 cans per week</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Bonus free t-shirt banner */}
              <div className="bg-[#e94ad8] text-white p-3 flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-2">
                  <span>+ free t-shirt</span>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={tshirtSize}
                    onChange={(e) => setTshirtSize(e.target.value)}
                    className="bg-white/20 text-white border-none rounded px-2 py-0.5 text-xs font-bold uppercase cursor-pointer"
                  >
                    <option value="S" className="text-black">S</option>
                    <option value="M" className="text-black">M</option>
                    <option value="L" className="text-black">L</option>
                    <option value="XL" className="text-black">XL</option>
                  </select>
                  <div>
                    <span className="line-through text-white/70 mr-1.5">£20.00</span>
                    <span className="font-mono text-white">£0.00</span>
                  </div>
                </div>
              </div>

              {/* Option 2: One-time purchase */}
              <div
                onClick={() => setIsSubscription(false)}
                className={`p-5 border-t border-black/10 cursor-pointer flex items-center justify-between transition-colors ${
                  !isSubscription ? "bg-[#f2f2f2]" : "hover:bg-zinc-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    checked={!isSubscription}
                    onChange={() => setIsSubscription(false)}
                    className="w-4 h-4 accent-black"
                  />
                  <span className="text-sm font-bold text-black lowercase">
                    one-time purchase
                  </span>
                </div>
                <span className="text-sm font-bold font-mono text-black">
                  £59.40
                </span>
              </div>
            </div>

            {/* Add to Cart CTA */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-bold text-sm uppercase tracking-wider rounded-md transition-colors shadow-md cursor-pointer"
            >
              add to cart
            </button>

            {/* Reassurance Badges */}
            <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-zinc-600 pt-2 border-t border-black/10">
              <div className="flex flex-col items-center gap-1.5 p-2">
                <Truck className="w-5 h-5 text-black" />
                <span>free shipping enabled</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2">
                <RefreshCw className="w-5 h-5 text-black" />
                <span>subscribe and save available</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2">
                <Star className="w-5 h-5 text-black" />
                <span>5 star reviews</span>
              </div>
            </div>

            <div className="text-center pt-2">
              <Link
                href="/products/nowhey-bundle-berry-mango-24-x-330ml"
                className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 hover:text-black transition-colors"
              >
                <span>view full details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
