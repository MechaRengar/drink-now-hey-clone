"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductByHandle, getAllProducts } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import {
  Star,
  Check,
  Truck,
  RefreshCw,
  Minus,
  Plus,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const handle = params?.handle as string;
  const product = getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isSubscription, setIsSubscription] = useState(true);
  const [subscriptionFrequency, setSubscriptionFrequency] = useState(
    "deliver every 3 weeks (most popular)"
  );
  const [quantity, setQuantity] = useState(1);

  const images = product.images.length > 0 ? product.images : [product.featuredImage];
  const unitPrice = isSubscription
    ? Math.round(product.price * 0.81)
    : product.price;

  const handleAddToCart = () => {
    addToCart(product, quantity, isSubscription, subscriptionFrequency);
  };

  const otherProducts = getAllProducts().filter((p) => p.handle !== product.handle);

  return (
    <div className="bg-white text-[#121212] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/collections/frontpage"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>back to shop</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square w-full bg-[#f4f4f4] rounded-3xl overflow-hidden flex items-center justify-center p-8 border border-black/5">
              {product.badge && (
                <span className="absolute top-6 left-6 z-10 bg-[#c6f91f] text-black text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
              <Image
                src={images[activeImageIdx] || product.featuredImage}
                alt={product.title}
                fill
                priority
                className="object-contain p-4"
              />
            </div>

            {/* Thumbnail switcher */}
            {images.length > 1 && (
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
            )}
          </div>

          {/* Right Column: Product Form */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-zinc-900">
                  {product.rating} / 5.0
                </span>
                <span className="text-xs text-zinc-500">
                  ({product.reviewCount} customer reviews)
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-normal lowercase tracking-tight text-zinc-900 leading-tight">
                {product.title}
              </h1>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-black font-mono">
                  {formatPrice(unitPrice)}
                </span>
                {product.compareAtPrice && product.compareAtPrice > product.price && (
                  <span className="text-base text-zinc-400 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
                {product.perCanPrice && (
                  <span className="text-xs text-zinc-500 font-medium">
                    ({product.perCanPrice})
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Quick Macro Badges */}
            {product.proteinGrams > 0 && (
              <div className="grid grid-cols-3 gap-3 text-center py-3 border-y border-black/10">
                <div className="p-2 bg-[#f9f9f9] rounded-xl">
                  <span className="block text-lg font-black font-mono text-zinc-900">
                    {product.proteinGrams}g
                  </span>
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
                    Protein
                  </span>
                </div>
                <div className="p-2 bg-[#f9f9f9] rounded-xl">
                  <span className="block text-lg font-black font-mono text-zinc-900">
                    {product.calories}
                  </span>
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
                    Calories
                  </span>
                </div>
                <div className="p-2 bg-[#f9f9f9] rounded-xl">
                  <span className="block text-lg font-black font-mono text-zinc-900">
                    {product.sugarGrams}g
                  </span>
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
                    Sugar
                  </span>
                </div>
              </div>
            )}

            {/* Quantity Stepper */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 lowercase mb-2">
                quantity
              </label>
              <div className="inline-flex items-center border border-black/20 rounded-md bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2.5 hover:bg-zinc-100 transition-colors text-zinc-600 cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm font-bold font-mono">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 hover:bg-zinc-100 transition-colors text-zinc-600 cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Purchase Mode (Only for consumable drinks) */}
            {product.canCount > 0 ? (
              <div className="border border-black/15 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-[#e94ad8] text-white py-1.5 px-4 text-center text-xs font-bold uppercase tracking-wider">
                  save 19% on every delivery
                </div>

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
                        regular refill (19% off)
                      </span>
                    </div>
                    <span className="text-sm font-bold font-mono text-black">
                      {formatPrice(Math.round(product.price * 0.81))}
                    </span>
                  </div>

                  {isSubscription && (
                    <div className="mt-3 pt-3 border-t border-black/10">
                      <select
                        value={subscriptionFrequency}
                        onChange={(e) => setSubscriptionFrequency(e.target.value)}
                        className="w-full text-xs font-semibold bg-white border border-black/20 rounded-lg p-2 text-zinc-800"
                      >
                        <option>deliver every 3 weeks (most popular)</option>
                        <option>deliver every 2 weeks</option>
                        <option>deliver every 4 weeks</option>
                      </select>
                    </div>
                  )}
                </div>

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
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>
            ) : null}

            {/* Add to Cart CTA */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-bold text-sm uppercase tracking-wider rounded-md transition-colors shadow-md cursor-pointer"
            >
              add to cart
            </button>

            {/* Reassurance */}
            <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-zinc-600 pt-2 border-t border-black/10">
              <div className="flex flex-col items-center gap-1.5 p-2">
                <Truck className="w-5 h-5 text-black" />
                <span>free delivery over £40</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2">
                <RefreshCw className="w-5 h-5 text-black" />
                <span>cancel anytime</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2">
                <ShieldCheck className="w-5 h-5 text-black" />
                <span>allergen-free</span>
              </div>
            </div>

            {/* Nutrition & Ingredients Accordion/Tab */}
            {product.nutritionFacts && (
              <div className="pt-6 border-t border-black/10 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                  nutrition &amp; ingredients
                </h3>
                <div className="bg-[#f7f7f7] p-4 rounded-xl text-xs space-y-2 text-zinc-700">
                  <p><strong>Serving Size:</strong> {product.nutritionFacts.servingSize}</p>
                  <p><strong>Protein:</strong> {product.nutritionFacts.protein}</p>
                  <p><strong>Energy:</strong> {product.nutritionFacts.calories}</p>
                  <p><strong>Sugars:</strong> {product.nutritionFacts.sugar}</p>
                  {product.ingredients && (
                    <p className="pt-2 border-t border-black/10">
                      <strong>Ingredients:</strong> {product.ingredients}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like / Other Products */}
        <div className="mt-24 pt-12 border-t border-black/10">
          <h2 className="text-2xl font-bold lowercase tracking-tight text-zinc-900 mb-8">
            you might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherProducts.slice(0, 3).map((item) => (
              <Link
                key={item.handle}
                href={`/products/${item.handle}`}
                className="group flex flex-col items-center text-center p-6 bg-[#f7f7f7] hover:bg-[#efefef] rounded-2xl transition-all border border-black/5"
              >
                <div className="relative w-48 aspect-square my-2">
                  <Image
                    src={item.featuredImage}
                    alt={item.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 mt-2">
                  {item.title}
                </h3>
                <span className="text-xs font-mono font-bold text-black mt-1">
                  {formatPrice(item.price)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
