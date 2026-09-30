"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { getPageBySlug } from "@/data/pages";
import { ArrowLeft, CheckCircle2, Send } from "lucide-react";

export default function StandardPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const page = getPageBySlug(slug);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderNumber: "",
    message: "",
  });

  if (!page) {
    notFound();
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>back to home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold lowercase tracking-tight font-mono">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="text-sm sm:text-base text-zinc-400 mt-2 font-normal">
              {page.subtitle}
            </p>
          )}
        </div>

        {/* Contact Form Special Handling */}
        {slug === "contact" && (
          <div className="mb-12">
            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#161616] border border-[#c6f91f]/40 text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-[#c6f91f] mx-auto" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-white font-mono">
                  message received!
                </h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto">
                  thank you for contacting nowhey. our team will review your enquiry and respond to {formData.email || "you"} within 12 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                className="bg-[#161616] p-8 rounded-3xl border border-white/10 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">
                      name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c6f91f]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">
                      email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c6f91f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">
                      phone number (optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7..."
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c6f91f]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">
                      order number (if applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      placeholder="#1042"
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c6f91f]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">
                    comment / enquiry *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c6f91f]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c6f91f] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#b0df1b] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c6f91f]/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>send message</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* Page HTML / Content */}
        {page.html && (
          <div
            className="rte"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        )}
      </div>
    </div>
  );
}
