import { client } from "@/lib/sanity";
import { allPostsQuery } from "@/lib/queries";
import type { Post } from "@/lib/types";
import PostCard from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Meltem Ersoy",
  description:
    "Reflections on Jungian psychology, dreams, archetypes, and psychological astrology.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch<Post[] | null>(allPostsQuery);

  // Serialize to avoid "Only plain objects" error
  const safePosts = JSON.parse(JSON.stringify(posts || []));

  return (
    <main id="main" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A2E] mb-4">
            Journal
          </h1>
          <p className="text-lg text-[#2D2D2D] max-w-2xl">
            Reflections on Jungian psychology, dreams, archetypes, and
            psychological astrology.
          </p>
        </header>

        {/* Posts Grid */}
        {safePosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {safePosts.map((post: Post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mb-4">
              No posts yet
            </h2>
            <p className="text-[#2D2D2D]">
              Check back soon for new reflections and insights.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
