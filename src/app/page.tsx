import { HeroSection } from "@/components/hero-section";
import { ProductsGrid } from "@/components/products-grid";
import { FeatureCards } from "@/components/feature-cards";
import { StockedIn } from "@/components/stocked-in";
import { ComparisonTable } from "@/components/comparison-table";
import { FeaturedProduct } from "@/components/featured-product";
import { ReviewsMarquee } from "@/components/reviews-marquee";
import { BrandStatement } from "@/components/brand-statement";
import { FaqAccordion } from "@/components/faq-accordion";
import { LifestyleGallery } from "@/components/lifestyle-gallery";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProductsGrid />
      <FeatureCards />
      <StockedIn />
      <ComparisonTable />
      <FeaturedProduct />
      <ReviewsMarquee />
      <BrandStatement />
      <FaqAccordion />
      <LifestyleGallery />
    </div>
  );
}
