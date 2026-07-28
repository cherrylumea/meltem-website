import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import type { Announcement } from "@/lib/types";

interface AnnouncementCardProps {
  announcement: Announcement;
}

export default function AnnouncementCard({
  announcement,
}: AnnouncementCardProps) {
  const href = announcement.slug?.current
    ? `/announcements/${announcement.slug.current}`
    : "#";

  return (
    <Link href={href} className="group block h-full">
      <div className="relative h-full flex flex-col bg-white border-l-4 border-[#C9A96E] border border-l-4 border-[#E8DCD0] hover:shadow-xl transition-all rounded-lg overflow-hidden">
        {announcement.isPinned && (
          <div className="absolute right-4 top-4 flex items-center gap-1 text-xs font-semibold text-[#C9A96E] bg-white px-2 py-1 rounded">
            📌 Pinned
          </div>
        )}
        {announcement.mainImage && (
          <div className="relative h-40 w-full overflow-hidden">
            <Image
              src={urlFor(announcement.mainImage).width(400).height(200).url()}
              alt={announcement.title || "Announcement"}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        )}
        <div className="flex-1 p-6 flex flex-col">
          <h3 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3 group-hover:text-[#C9A96E] transition-colors">
            {announcement.title || "Untitled"}
          </h3>
          {announcement.excerpt && (
            <p className="text-sm text-[#2D2D2D] line-clamp-2 mb-4 flex-1">
              {announcement.excerpt}
            </p>
          )}
          <div className="flex justify-between items-end text-xs text-[#2D2D2D] opacity-60">
            {announcement.publishedAt && (
              <time>
                {new Date(announcement.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )}
              </time>
            )}
            {announcement.expiresAt && (
              <span>
                Expires:{" "}
                {new Date(announcement.expiresAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
