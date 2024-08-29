import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";
import BestSellSection from "@/components/home/BestSellSection";
import CategorySection from "@/components/home/CategorySection";
import DiscountProductSection from "@/components/home/DiscountProductSection";
import ProductSection from "@/components/home/ProductSection";
import SummerCollectionSection from "@/components/home/SummerCollectionSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <BannerSection />
      {/* <CategorySection />
      <ProductSection />
      <DiscountProductSection />
      <AboutSection />
      <BestSellSection /> */}
      <SummerCollectionSection />
      <TestimonialSection />
    </>
  );
}
