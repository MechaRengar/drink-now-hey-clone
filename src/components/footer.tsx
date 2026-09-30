import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#121212] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-extrabold tracking-tighter text-white font-mono lowercase">
                nowhey
              </span>
            </Link>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              no compromise. no excuses. nowhey. designed to help you improve fitness, build muscle and lose body fat, nowhey contains 20g clear plant protein, 86 calories and zero sugar.
            </p>
            <p className="text-xs text-zinc-500">
              registered in England &amp; Wales.
            </p>
          </div>

          {/* Col 2: Shop */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              shop
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/products/nowhey-bundle-berry-mango-24-x-330ml" className="hover:text-white transition-colors">
                  mixed bundle (24 cans)
                </Link>
              </li>
              <li>
                <Link href="/products/nowhey-berry-12-pack" className="hover:text-white transition-colors">
                  berry (12 cans)
                </Link>
              </li>
              <li>
                <Link href="/products/nowhey-mango-12-pack" className="hover:text-white transition-colors">
                  mango (12 cans)
                </Link>
              </li>
              <li>
                <Link href="/products/t-shirt" className="hover:text-white transition-colors">
                  athletic tee shirt
                </Link>
              </li>
              <li>
                <Link href="/collections/frontpage" className="hover:text-white transition-colors">
                  all products
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: About & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              company
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/pages/about-nowhey" className="hover:text-white transition-colors">
                  about nowhey
                </Link>
              </li>
              <li>
                <Link href="/pages/b2b" className="hover:text-white transition-colors">
                  b2b / stockists
                </Link>
              </li>
              <li>
                <Link href="/pages/ambassadors" className="hover:text-white transition-colors">
                  ambassadors
                </Link>
              </li>
              <li>
                <Link href="/pages/sustainability" className="hover:text-white transition-colors">
                  sustainability
                </Link>
              </li>
              <li>
                <Link href="/pages/notarunclub" className="hover:text-white transition-colors">
                  #notarunclub
                </Link>
              </li>
              <li>
                <Link href="/blogs/news" className="hover:text-white transition-colors">
                  news &amp; journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              policies &amp; help
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/pages/contact" className="hover:text-white transition-colors">
                  contact us
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy-policy" className="hover:text-white transition-colors">
                  privacy policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms-of-service" className="hover:text-white transition-colors">
                  terms of service
                </Link>
              </li>
              <li>
                <Link href="/policies/shipping-policy" className="hover:text-white transition-colors">
                  shipping policy
                </Link>
              </li>
              <li>
                <Link href="/policies/refund-policy" className="hover:text-white transition-colors">
                  refund policy
                </Link>
              </li>
              <li>
                <Link href="/policies/subscription-policy" className="hover:text-white transition-colors">
                  cancellation policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} nowhey. all rights reserved.</p>

          <div className="flex items-center gap-3 text-zinc-400 text-[11px] font-semibold">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
            <span>Google Pay</span>
            <span>Shop Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
