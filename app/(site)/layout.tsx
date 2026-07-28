import { client } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { SiteSettings } from "@/lib/types";

export const revalidate = 60;

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings: SiteSettings =
    (await client.fetch<SiteSettings | null>(siteSettingsQuery)) ?? {};

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#1A1A2E] focus:text-[#FDFBF7] focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      <Header settings={settings} />
      <div className="pt-[80px] flex-1">{children}</div>
      <Footer settings={settings} />
    </>
  );
}
