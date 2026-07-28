import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  logoName,
  logoTitle,
  navLinks[]{ _key, label, href },
  ctaText,
  ctaLink,
  contactEmail,
  contactPhone,
  contactLocation,
  footerTagline,
  footerText
}`;

export const homePageQuery = groq`*[_type == "homePage"][0]{
  _id,
  _rev,
  sections[]{ ... }
}`;

export const allPostsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  author,
  publishedAt,
  "categories": categories[]->{title, slug}
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  author,
  publishedAt,
  "categories": categories[]->{title, slug},
  body
}`;

export const allAnnouncementsQuery = groq`*[_type == "announcement" && defined(slug.current)] | order(isPinned desc, publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  expiresAt,
  isPinned
}`;

export const announcementBySlugQuery = groq`*[_type == "announcement" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  expiresAt,
  isPinned,
  body
}`;
