import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blogs";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  // Case 1: /blogs/news (list all posts)
  if (slug.length === 1 && slug[0] === "news") {
    return (
      <div className="bg-[#121212] text-white min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>back to home</span>
            </Link>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c6f91f]">
              journal &amp; news
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold lowercase tracking-tight font-mono mt-2">
              latest articles
            </h1>
            <p className="text-sm text-zinc-400 mt-3">
              the science of clear protein, nutrition protocols, and athlete stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-[#161616] rounded-3xl overflow-hidden border border-white/10 flex flex-col group hover:border-[#c6f91f]/40 transition-colors"
              >
                {post.image && (
                  <div className="relative aspect-16/9 w-full bg-zinc-900 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#c6f91f]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                    </div>

                    <Link href={`/blogs/news/${post.slug}`}>
                      <h2 className="text-xl font-bold uppercase font-mono text-white group-hover:text-[#c6f91f] transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-xs text-zinc-400 leading-relaxed mt-2 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/blogs/news/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#c6f91f] uppercase tracking-wider hover:underline"
                  >
                    <span>read article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Case 2: Individual article /blogs/news/[article-slug]
  const articleSlug = slug[slug.length - 1];
  const post = getBlogPostBySlug(articleSlug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/blogs/news"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>back to news</span>
          </Link>
        </div>

        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#c6f91f]" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-mono text-white leading-tight">
            {post.title}
          </h1>
        </div>

        {post.image && (
          <div className="relative aspect-16/9 w-full rounded-3xl overflow-hidden mb-12 border border-white/10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <div
          className="rte"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
