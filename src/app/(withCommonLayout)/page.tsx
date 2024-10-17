import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";
import BestSellSection from "@/components/home/BestSellSection";
import BrandSection from "@/components/home/BrandSection";
import CategorySection from "@/components/home/CategorySection";
import ContactSection from "@/components/home/ContactSection";
import DiscountProductSection from "@/components/home/DiscountProductSection";
import ProductSection from "@/components/home/ProductSection";
import SummerCollectionSection from "@/components/home/SummerCollectionSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default async function HomePage() {
  return (
    <>
      <BannerSection />
      <CategorySection />
      <ProductSection />
      <DiscountProductSection />
      <AboutSection />
      <BestSellSection />
      <SummerCollectionSection />
      <TestimonialSection />
      <BrandSection />
      <ContactSection />
    </>
  );
}
