import { client } from "@/lib/sanity";
import { homePageQuery } from "@/lib/queries";
import type {
  HomePage,
  PageSection,
  HeroSectionData,
  ValuePropSectionData,
  TrustSignalsData,
  AboutSectionData,
  ServicesSectionData,
  WhySectionData,
  JourneySectionData,
  TestimonialsSectionData,
  FaqSectionData,
  ResourcesSectionData,
  FinalCtaData,
  ContactSectionData,
} from "@/lib/types";
import HeroSection from "@/components/HeroSection";
import ValuePropSection from "@/components/ValuePropSection";
import TrustSignals from "@/components/TrustSignals";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import JourneySection from "@/components/JourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ResourcesSection from "@/components/ResourcesSection";
import FinalCta from "@/components/FinalCta";
import ContactSection from "@/components/ContactSection";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function renderSection(section: PageSection, key: string) {
  switch (section._type) {
    case "heroSection":
      return <HeroSection key={key} data={section as HeroSectionData} />;
    case "valuePropSection":
      return <ValuePropSection key={key} data={section as ValuePropSectionData} />;
    case "trustSignals":
      return <TrustSignals key={key} data={section as TrustSignalsData} />;
    case "aboutSection":
      return <AboutSection key={key} data={section as AboutSectionData} />;
    case "servicesSection":
      return <ServicesSection key={key} data={section as ServicesSectionData} />;
    case "whySection":
      return <WhySection key={key} data={section as WhySectionData} />;
    case "journeySection":
      return <JourneySection key={key} data={section as JourneySectionData} />;
    case "testimonialsSection":
      return (
        <TestimonialsSection key={key} data={section as TestimonialsSectionData} />
      );
    case "faqSection":
      return <FaqSection key={key} data={section as FaqSectionData} />;
    case "resourcesSection":
      return <ResourcesSection key={key} data={section as ResourcesSectionData} />;
    case "finalCta":
      return <FinalCta key={key} data={section as FinalCtaData} />;
    case "contactSection":
      return <ContactSection key={key} data={section as ContactSectionData} />;
    default:
      return null;
  }
}

export default async function Home() {
  const pageData = await client.fetch<HomePage | null>(
    homePageQuery,
    {},
    { cache: "no-store" }
  );
  const sections: PageSection[] = pageData?.sections ?? [];

  if (sections.length === 0) {
    return (
      <main id="main" className="py-24">
        <div className="container mx-auto px-8 max-w-[800px] text-center">
          <h1 className="font-display text-3xl font-semibold text-[#1A1A2E] mb-4">
            No content yet
          </h1>
          <p className="text-[#2D2D2D]">
            Add sections to the Home Page document in{" "}
            <a href="/studio" className="underline hover:text-[#C9A96E]">
              Sanity Studio
            </a>{" "}
            to see them here.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main id="main">
      {sections.map((section, index) =>
        renderSection(section, section._key ?? `${section._type}-${index}`)
      )}
    </main>
  );
}
