import { client } from "@/lib/sanity";
import { postBySlugQuery } from "@/lib/queries";
import type { Post } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug });

  if (!post) {
    return {
      title: "Post not found | Meltem Ersoy",
    };
  }

  return {
    title: `${post.title} | Meltem Ersoy`,
    description: post.excerpt || undefined,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug });

  if (!post) {
    return (
      <main id="main" className="py-24">
        <div className="container mx-auto px-8 max-w-[800px] text-center">
          <h1 className="font-display text-3xl font-semibold text-[#1A1A2E] mb-4">
            Post not found
          </h1>
          <p className="text-[#2D2D2D] mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-block text-[#1A1A2E] underline hover:text-[#C9A96E]"
          >
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  // Serialize to avoid "Only plain objects" error
  const safePost = JSON.parse(JSON.stringify(post));

  return (
    <main id="main" className="py-24 bg-[#FDFBF7]">
      <article className="container mx-auto px-8 max-w-[800px]">
        {/* Header */}
        <header className="mb-12">
          {safePost.mainImage && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={urlFor(safePost.mainImage).width(800).height(450).url()}
                alt={safePost.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <h1 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A2E] mb-4">
            {safePost.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#2D2D2D] opacity-70 pb-8 border-b border-[#E8DCD0]">
            {safePost.author && (
              <>
                <span>By {safePost.author}</span>
                <span>•</span>
              </>
            )}
            {safePost.publishedAt && (
              <time>
                {new Date(safePost.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            {safePost.categories && safePost.categories.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {safePost.categories.map((cat: any) => (
                    <span
                      key={cat.slug?.current}
                      className="px-3 py-1 bg-[#F5F0EB] text-[#1A1A2E] rounded-full text-xs font-medium"
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        {/* Body */}
        {safePost.body && (
          <div className="prose prose-sm max-w-none text-[#2D2D2D] mb-16">
            <div className="text-lg leading-[1.8] [&>p]:mb-6 [&>h2]:font-display [&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:text-[#1A1A2E] [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:font-display [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-[#1A1A2E] [&>h3]:mt-8 [&>h3]:mb-3">
              <PortableText value={safePost.body} />
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="pt-8 border-t border-[#E8DCD0]">
          <Link
            href="/"
            className="inline-block text-[#1A1A2E] underline hover:text-[#C9A96E] transition-colors"
          >
            ← Back home
          </Link>
        </footer>
      </article>
    </main>
  );
}
