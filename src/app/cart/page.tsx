"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    freeShippingThreshold,
    freeShippingProgress,
  } = useCart();

  const [notes, setNotes] = useState("");
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold || items.length === 0 ? 0 : 399; // £3.99
  const orderTotal = subtotal + shippingFee;

  return (
    <div className="bg-[#121212] text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/collections/frontpage"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>continue shopping</span>
          </Link>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold lowercase tracking-tight font-mono mb-8">
          your shopping cart
        </h1>

        {items.length === 0 ? (
          <div className="bg-[#161616] rounded-3xl border border-white/10 p-16 text-center max-w-xl mx-auto space-y-4">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto text-zinc-500">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold uppercase font-mono text-white">
              your cart is empty
            </h2>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              looks like you haven&apos;t added any nowhey cans yet. discover our refreshing fruit flavours.
            </p>
            <div className="pt-4">
              <Link
                href="/collections/frontpage"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c6f91f] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#b0df1b] transition-all"
              >
                <span>explore flavours</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Items Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Free shipping banner */}
              <div className="bg-[#181818] p-5 rounded-2xl border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span>
                    {remainingForFreeShipping === 0 ? (
                      <span className="text-[#c6f91f]">
                        🎉 you qualify for FREE tracked delivery!
                      </span>
                    ) : (
                      <span>
                        add <strong className="text-white font-mono">{formatPrice(remainingForFreeShipping)}</strong> more to get <strong className="text-[#c6f91f]">FREE SHIPPING</strong>
                      </span>
                    )}
                  </span>
                  <span className="text-zinc-400 font-mono">{freeShippingProgress}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c6f91f] rounded-full transition-all duration-300"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items Table */}
              <div className="bg-[#161616] rounded-3xl border border-white/10 divide-y divide-white/10 overflow-hidden">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
                  >
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="relative w-24 h-24 rounded-2xl bg-white/5 border border-white/10 shrink-0 overflow-hidden p-2 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="space-y-1">
                        <Link
                          href={`/products/${item.handle}`}
                          className="text-sm font-bold text-white hover:text-[#c6f91f] transition-colors"
                        >
                          {item.title}
                        </Link>
                        {item.isSubscription && (
                          <span className="inline-block text-[10px] font-bold text-[#e94ad8] bg-[#e94ad8]/10 px-2 py-0.5 rounded uppercase">
                            regular refill (19% off)
                          </span>
                        )}
                        <p className="text-xs text-zinc-400 font-mono">
                          {formatPrice(item.price)} each
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                      <div className="inline-flex items-center border border-white/20 rounded-lg bg-black/40">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-4 text-xs font-mono font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-bold font-mono text-white w-20 text-right">
                        {formatPrice(item.price * item.quantity)}
                      </span>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Notes */}
              <div className="bg-[#161616] p-6 rounded-2xl border border-white/10 space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  special delivery instructions
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. leave behind side gate if not in..."
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#c6f91f]"
                />
              </div>
            </div>

            {/* Summary Column */}
            <div className="lg:col-span-4 bg-[#161616] p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-tight font-mono border-b border-white/10 pb-4">
                order summary
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-white font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Tracked UK Shipping</span>
                  <span className="font-mono text-white font-bold">
                    {shippingFee === 0 ? "FREE" : formatPrice(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Estimated Taxes</span>
                  <span className="font-mono text-zinc-400">Included</span>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-sm font-bold text-white">
                  <span>Total</span>
                  <span className="text-xl font-mono text-[#c6f91f]">
                    {formatPrice(orderTotal)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => alert("Checkout initiated! Total: " + formatPrice(orderTotal))}
                className="w-full py-4 bg-[#c6f91f] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b0df1b] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c6f91f]/20 cursor-pointer"
              >
                <span>proceed to checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-2 pt-4 border-t border-white/10 text-[11px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#c6f91f] shrink-0" />
                  <span>Free tracked delivery over £40</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c6f91f] shrink-0" />
                  <span>Secure 256-bit SSL encrypted checkout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
