import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";
import BestSellSection from "@/components/home/BestSellSection";
import BrandSection from "@/components/home/BrandSection";
import CategorySection from "@/components/home/CategorySection";
import ContactSection from "@/components/home/ContactSection";
import FeaturedProductSection from "@/components/home/FeaturedProductSection";
import ProductsOnSaleSection from "@/components/home/ProductsOnSaleSection";
import SummerCollectionSection from "@/components/home/SummerCollectionSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default async function HomePage() {
  return (
    <>
      <BannerSection />
      <CategorySection />
      <FeaturedProductSection />
      <ProductsOnSaleSection />
      <AboutSection />
      <BestSellSection />
      <SummerCollectionSection />
      <TestimonialSection />
      <BrandSection />
      <ContactSection />
    </>
  );
}
