import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const href = post.slug?.current ? `/blog/${post.slug.current}` : "#";

  return (
    <Link href={href} className="group block h-full">
      <div className="h-full flex flex-col bg-white border border-[#E8DCD0] hover:border-[#C9A96E] hover:shadow-xl transition-all rounded-lg overflow-hidden">
        {post.mainImage && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(600).height(400).url()}
              alt={post.title || "Post"}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        )}
        <div className="flex-1 p-6 flex flex-col">
          {post.categories && post.categories.length > 0 && (
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-[#C9A96E] max-w-fit">
              {post.categories[0].title || "Uncategorized"}
            </span>
          )}
          <h3 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3 group-hover:text-[#C9A96E] transition-colors">
            {post.title || "Untitled"}
          </h3>
          {post.excerpt && (
            <p className="text-sm text-[#2D2D2D] line-clamp-2 mb-4 flex-1">
              {post.excerpt}
            </p>
          )}
          {post.publishedAt && (
            <time className="text-xs text-[#2D2D2D] opacity-60">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>
      </div>
    </Link>
  );
}
