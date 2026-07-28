import { client } from "@/lib/sanity";
import { announcementBySlugQuery } from "@/lib/queries";
import type { Announcement } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import type { Metadata } from "next";

interface AnnouncementPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: AnnouncementPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const announcement = await client.fetch<Announcement | null>(
    announcementBySlugQuery,
    { slug }
  );

  if (!announcement) {
    return {
      title: "Announcement not found | Meltem Ersoy",
    };
  }

  return {
    title: `${announcement.title} | Meltem Ersoy`,
    description: announcement.excerpt || undefined,
  };
}

export default async function AnnouncementPage({
  params,
}: AnnouncementPageProps) {
  const { slug } = await params;
  const announcement = await client.fetch<Announcement | null>(
    announcementBySlugQuery,
    { slug }
  );

  if (!announcement) {
    return (
      <main id="main" className="py-24">
        <div className="container mx-auto px-8 max-w-[800px] text-center">
          <h1 className="font-display text-3xl font-semibold text-[#1A1A2E] mb-4">
            Announcement not found
          </h1>
          <p className="text-[#2D2D2D] mb-8">
            The announcement you're looking for doesn't exist or has expired.
          </p>
          <Link
            href="/"
            className="inline-block text-[#1A1A2E] underline hover:text-[#C9A96E]"
          >
            Back home
          </Link>
        </div>
      </main>
    );
  }

  // Serialize to avoid "Only plain objects" error
  const safeAnnouncement = JSON.parse(JSON.stringify(announcement));

  const isExpired =
    safeAnnouncement.expiresAt &&
    new Date(safeAnnouncement.expiresAt) < new Date();

  if (isExpired) {
    return (
      <main id="main" className="py-24">
        <div className="container mx-auto px-8 max-w-[800px] text-center">
          <h1 className="font-display text-3xl font-semibold text-[#1A1A2E] mb-4">
            Announcement expired
          </h1>
          <p className="text-[#2D2D2D] mb-8">
            This announcement is no longer active.
          </p>
          <Link
            href="/"
            className="inline-block text-[#1A1A2E] underline hover:text-[#C9A96E]"
          >
            Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main" className="py-24 bg-[#FDFBF7]">
      <article className="container mx-auto px-8 max-w-[800px]">
        {/* Header */}
        <header className="mb-12">
          {safeAnnouncement.mainImage && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={urlFor(safeAnnouncement.mainImage)
                  .width(800)
                  .height(450)
                  .url()}
                alt={safeAnnouncement.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {safeAnnouncement.isPinned && (
            <div className="mb-4 inline-block px-3 py-1 bg-[#C9A96E] text-white rounded-full text-xs font-medium">
              📌 Pinned
            </div>
          )}

          <h1 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A2E] mb-4">
            {safeAnnouncement.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#2D2D2D] opacity-70 pb-8 border-b border-[#E8DCD0]">
            {safeAnnouncement.publishedAt && (
              <time>
                {new Date(safeAnnouncement.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </time>
            )}
            {safeAnnouncement.expiresAt && (
              <>
                <span>•</span>
                <span>
                  Expires:{" "}
                  {new Date(safeAnnouncement.expiresAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </>
            )}
          </div>
        </header>

        {/* Body */}
        {safeAnnouncement.body && (
          <div className="prose prose-sm max-w-none text-[#2D2D2D] mb-16">
            <div className="text-lg leading-[1.8] [&>p]:mb-6 [&>h2]:font-display [&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:text-[#1A1A2E] [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:font-display [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-[#1A1A2E] [&>h3]:mt-8 [&>h3]:mb-3">
              <PortableText value={safeAnnouncement.body} />
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
