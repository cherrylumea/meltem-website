import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";

export type SanityImage = SanityImageSource;

export interface NavLink {
  _key?: string;
  label?: string;
  href?: string;
}

export interface SiteSettings {
  logoName?: string;
  logoTitle?: string;
  navLinks?: NavLink[];
  ctaText?: string;
  ctaLink?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactLocation?: string;
  footerTagline?: string;
  footerText?: string;
}

export interface SectionBase {
  _key?: string;
  _type: string;
}

export interface HeroSectionData extends SectionBase {
  heading?: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  image?: SanityImage;
}

export interface ValuePropSectionData extends SectionBase {
  heading?: string;
  bodyText?: PortableTextBlock[];
}

export interface Credential {
  _key?: string;
  label?: string;
  detail?: string;
}

export interface TrustSignalsData extends SectionBase {
  credentials?: Credential[];
}

export interface AboutSectionData extends SectionBase {
  heading?: string;
  image?: SanityImage;
  body?: PortableTextBlock[];
  linkText?: string;
  linkUrl?: string;
}

export interface ServiceCard {
  _key?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
}

export interface ServicesSectionData extends SectionBase {
  sectionTitle?: string;
  services?: ServiceCard[];
}

export interface WhySectionData extends SectionBase {
  heading?: string;
  body?: string;
}

export interface JourneyStep {
  _key?: string;
  number?: string;
  title?: string;
  description?: string;
}

export interface JourneySectionData extends SectionBase {
  steps?: JourneyStep[];
}

export interface Testimonial {
  _key?: string;
  quote?: string;
  author?: string;
}

export interface TestimonialsSectionData extends SectionBase {
  testimonials?: Testimonial[];
}

export interface FaqItem {
  _key?: string;
  question?: string;
  answer?: string;
}

export interface FaqSectionData extends SectionBase {
  title?: string;
  items?: FaqItem[];
}

export interface ResourceCard {
  _key?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
}

export interface ResourcesSectionData extends SectionBase {
  title?: string;
  resources?: ResourceCard[];
}

export interface FinalCtaData extends SectionBase {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface ContactSectionData extends SectionBase {
  heading?: string;
  subheading?: string;
  introText?: string;
  phone?: string;
  email?: string;
  location?: string;
  sessions?: string;
  fee?: string;
  languages?: string;
  formEndpoint?: string;
}

export type PageSection =
  | HeroSectionData
  | ValuePropSectionData
  | TrustSignalsData
  | AboutSectionData
  | ServicesSectionData
  | WhySectionData
  | JourneySectionData
  | TestimonialsSectionData
  | FaqSectionData
  | ResourcesSectionData
  | FinalCtaData
  | ContactSectionData;

export interface HomePage {
  sections?: PageSection[];
}

export interface Category {
  title?: string;
  slug?: { current?: string };
}

export interface Post {
  _id?: string;
  title?: string;
  slug?: { current?: string };
  excerpt?: string;
  mainImage?: SanityImage;
  author?: string;
  publishedAt?: string;
  categories?: Category[];
  body?: PortableTextBlock[];
}

export interface Announcement {
  _id?: string;
  title?: string;
  slug?: { current?: string };
  excerpt?: string;
  mainImage?: SanityImage;
  publishedAt?: string;
  expiresAt?: string;
  isPinned?: boolean;
  body?: PortableTextBlock[];
}
