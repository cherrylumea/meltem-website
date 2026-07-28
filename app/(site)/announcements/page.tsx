import { client } from "@/lib/sanity";
import { allAnnouncementsQuery } from "@/lib/queries";
import type { Announcement } from "@/lib/types";
import AnnouncementCard from "@/components/AnnouncementCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Announcements | Meltem Ersoy",
  description:
    "Updates and announcements from Meltem Ersoy's practice.",
};

export const revalidate = 60;

export default async function AnnouncementsPage() {
  const announcements = await client.fetch<Announcement[] | null>(
    allAnnouncementsQuery
  );

  // Serialize to avoid "Only plain objects" error
  const safeAnnouncements = JSON.parse(JSON.stringify(announcements || []));

  // Filter out expired announcements for the listing
  const activeAnnouncements = safeAnnouncements.filter(
    (announcement: Announcement) => {
      if (!announcement.expiresAt) return true;
      return new Date(announcement.expiresAt) >= new Date();
    }
  );

  return (
    <main id="main" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-[#1A1A2E] mb-4">
            Announcements
          </h1>
          <p className="text-lg text-[#2D2D2D] max-w-2xl">
            Updates and important messages about sessions, offerings, and
            practice hours.
          </p>
        </header>

        {/* Announcements Grid */}
        {activeAnnouncements.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activeAnnouncements.map((announcement: Announcement) => (
              <AnnouncementCard
                key={announcement._id}
                announcement={announcement}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mb-4">
              No active announcements
            </h2>
            <p className="text-[#2D2D2D]">
              Check back for updates about sessions and offerings.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
