import AboutSection from "@/components/home/AboutSection";
import BabyCareSection from "@/components/home/BabyCareSection";
import BannerSection from "@/components/home/BannerSection";
import BestSellSection from "@/components/home/BestSellSection";
import BrandSection from "@/components/home/BrandSection";
import CategorySection from "@/components/home/CategorySection";
import ContactSection from "@/components/home/ContactSection";
import FeaturedProductSection from "@/components/home/FeaturedProductSection";
import SkinCareProductSection from "@/components/home/SkinCareProductSection";
import SummerCollectionSection from "@/components/home/SummerCollectionSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default async function HomePage() {
  return (
    <>
      <BannerSection />
      <CategorySection />
      <FeaturedProductSection />
      <SkinCareProductSection />
      <BabyCareSection />
      <AboutSection />
      <BestSellSection />
      <SummerCollectionSection />
      <TestimonialSection />
      <BrandSection />
      <ContactSection />
    </>
  );
}
