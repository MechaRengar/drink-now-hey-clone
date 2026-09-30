"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    freeShippingThreshold,
    freeShippingProgress,
  } = useCart();

  if (!isOpen) return null;

  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop scrim */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-[#161616] border-l border-white/10 text-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#c6f91f]" />
              <h2 className="text-base font-bold tracking-tight uppercase">your cart</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="bg-[#1c1c1c] px-6 py-3 border-b border-white/5">
            <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
              <span>
                {remainingForFreeShipping === 0 ? (
                  <span className="text-[#c6f91f] font-semibold">
                    🎉 you unlocked FREE tracked UK delivery!
                  </span>
                ) : (
                  <span>
                    add <strong className="text-white font-mono">{formatPrice(remainingForFreeShipping)}</strong> more for <strong className="text-[#c6f91f]">FREE SHIPPING</strong>
                  </span>
                )}
              </span>
              <span className="text-zinc-400 font-mono text-[11px]">{freeShippingProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#c6f91f] transition-all duration-300 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Line Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-white/5">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-zinc-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold mb-1">your cart is empty</h3>
                <p className="text-xs text-zinc-400 max-w-xs mb-6">
                  experience the clear protein difference with crisp Berry or juicy Mango.
                </p>
                <button
                  onClick={closeCart}
                  className="px-6 py-3 bg-[#c6f91f] text-black font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#b0df1b] transition-colors cursor-pointer"
                >
                  shop cans
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-start">
                  <div className="relative w-20 h-20 rounded-xl bg-white/5 border border-white/10 shrink-0 overflow-hidden p-1 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-white lowercase leading-tight truncate">
                        {item.title}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {item.isSubscription && (
                      <span className="inline-block mt-1 text-[10px] font-bold text-[#e94ad8] bg-[#e94ad8]/10 px-2 py-0.5 rounded uppercase">
                        refill (19% off)
                      </span>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-white/20 rounded-md bg-black/40">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-mono font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold font-mono text-[#c6f91f]">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#141414] space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  subtotal
                </span>
                <span className="text-lg font-bold font-mono text-white">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <p className="text-[11px] text-zinc-500 text-center">
                shipping and taxes calculated at checkout
              </p>

              <button
                onClick={() => alert("Checkout demo! Subtotal: " + formatPrice(subtotal))}
                className="w-full py-4 bg-[#c6f91f] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b0df1b] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c6f91f]/20 cursor-pointer"
              >
                <span>proceed to checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="text-xs text-zinc-400 hover:text-white underline underline-offset-4"
                >
                  view full cart page
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
