import { HeroSection } from "@/components/storefront/homepage/hero-section";
import { FeaturedCategoriesSection } from "@/components/storefront/homepage/featured-categories-section";
import { BestSellersSection } from "@/components/storefront/homepage/best-sellers-section";
import { PromotionalBannerSection } from "@/components/storefront/homepage/promotional-banner-section";
import { WhyChooseNeloSection } from "@/components/storefront/homepage/why-choose-nelo-section";
import { NewArrivalsSection } from "@/components/storefront/homepage/new-arrivals-section";
import { TestimonialsSection } from "@/components/storefront/homepage/testimonials-section";
import { NewsletterSection } from "@/components/storefront/homepage/newsletter-section";

export const metadata = {
  title: "Nelo Blossom Empire | Your Beauty, Wellness & Self-Care Destination",
  description: "Discover our curated collection of premium products designed to elevate your everyday routine.",
};

export default function StorefrontHomepage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturedCategoriesSection />
      <BestSellersSection />
      <PromotionalBannerSection />
      <WhyChooseNeloSection />
      <NewArrivalsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
