"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { ShoppingBag, Menu, X, ChevronDown, User, ArrowRight } from "lucide-react";

export function Navbar() {
  const { openCart, itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Left: Desktop Nav or Mobile Hamburger */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 text-zinc-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold uppercase tracking-wider text-zinc-300">
            <Link href="/" className="hover:text-white transition-colors">
              home
            </Link>
            <Link href="/collections/frontpage" className="hover:text-white transition-colors">
              shop
            </Link>

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-white transition-colors py-2 uppercase font-bold">
                <span>about</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-60 py-3 bg-[#161616] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/pages/about-nowhey"
                    className="block px-5 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    about nowhey
                  </Link>
                  <Link
                    href="/pages/b2b"
                    className="block px-5 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    b2b / stockists
                  </Link>
                  <Link
                    href="/pages/ambassadors"
                    className="block px-5 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    ambassadors
                  </Link>
                  <Link
                    href="/pages/sustainability"
                    className="block px-5 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    sustainability
                  </Link>
                  <Link
                    href="/pages/notarunclub"
                    className="block px-5 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    #notarunclub
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pages/contact" className="hover:text-white transition-colors">
              contact
            </Link>
          </nav>
        </div>

        {/* Center: Brand Wordmark Logo */}
        <div className="flex-1 lg:flex-none flex justify-center">
          <Link href="/" className="inline-flex items-center">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter lowercase text-white font-mono hover:opacity-90 transition-opacity">
              nowhey
            </span>
          </Link>
        </div>

        {/* Right: Currency, Account, Cart Bag */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden md:inline-block text-[11px] font-bold text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
            🇬🇧 GBP (£)
          </span>

          <Link
            href="/pages/contact"
            className="p-2 text-zinc-300 hover:text-white transition-colors"
            aria-label="Account Login"
          >
            <User className="w-5 h-5" />
          </Link>

          <button
            onClick={openCart}
            className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center text-white"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#c6f91f] text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161616] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-bold uppercase tracking-wider">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-white hover:text-[#c6f91f] flex items-center justify-between border-b border-white/5"
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
            <Link
              href="/collections/frontpage"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-white hover:text-[#c6f91f] flex items-center justify-between border-b border-white/5"
            >
              <span>Shop All Cans</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
            <Link
              href="/products/nowhey-bundle-berry-mango-24-x-330ml"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-[#c6f91f] flex items-center justify-between border-b border-white/5"
            >
              <span>Mixed Bundle (24-pack)</span>
              <span className="text-[10px] bg-[#c6f91f]/20 px-2 py-0.5 rounded text-[#c6f91f]">Save 10%</span>
            </Link>
            <Link
              href="/products/nowhey-berry-12-pack"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-zinc-300 hover:text-white flex items-center justify-between border-b border-white/5"
            >
              <span>Berry (12-pack)</span>
            </Link>
            <Link
              href="/products/nowhey-mango-12-pack"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-zinc-300 hover:text-white flex items-center justify-between border-b border-white/5"
            >
              <span>Mango (12-pack)</span>
            </Link>
            <Link
              href="/pages/about-nowhey"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-zinc-300 hover:text-white flex items-center justify-between border-b border-white/5"
            >
              <span>About Nowhey</span>
            </Link>
            <Link
              href="/pages/b2b"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-zinc-300 hover:text-white flex items-center justify-between border-b border-white/5"
            >
              <span>B2B / Stockists</span>
            </Link>
            <Link
              href="/pages/ambassadors"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-zinc-300 hover:text-white flex items-center justify-between border-b border-white/5"
            >
              <span>Ambassadors</span>
            </Link>
            <Link
              href="/pages/sustainability"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-zinc-300 hover:text-white flex items-center justify-between border-b border-white/5"
            >
              <span>Sustainability</span>
            </Link>
            <Link
              href="/pages/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-zinc-300 hover:text-white flex items-center justify-between"
            >
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
