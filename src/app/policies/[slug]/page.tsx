import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPolicyBySlug } from "@/data/policies";
import { ArrowLeft } from "lucide-react";

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);

  if (!policy) {
    notFound();
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>back to home</span>
          </Link>
        </div>

        <div className="mb-10 border-b border-white/10 pb-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-mono">
            {policy.title}
          </h1>
          {policy.lastUpdated && (
            <p className="text-xs text-zinc-500 mt-2">
              Last updated: {policy.lastUpdated}
            </p>
          )}
        </div>

        <div
          className="rte"
          dangerouslySetInnerHTML={{ __html: policy.html }}
        />
      </div>
    </div>
  );
}
