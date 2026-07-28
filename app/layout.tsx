import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meltemersoy.com"),
  title: "Meltem Ersoy | Jungian Analyst & Psychological Astrologer, Toronto",
  description:
    "Depth psychotherapy integrating Jungian analysis with psychological astrology. For those ready to explore the depths of psyche and soul.",
  openGraph: {
    type: "website",
    title: "Meltem Ersoy | Jungian Analyst & Psychological Astrologer, Toronto",
    description:
      "Depth psychotherapy integrating Jungian analysis with psychological astrology.",
    url: "/",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
