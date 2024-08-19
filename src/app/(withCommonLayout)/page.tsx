import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";
import CategorySection from "@/components/home/CategorySection";
import DiscountProductSection from "@/components/home/DiscountProductSection";
import ProductSection from "@/components/home/ProductSection";

export default function HomePage() {
  return (
    <>
      <BannerSection />
      <CategorySection />
      <ProductSection />
      <DiscountProductSection />
      <AboutSection />
    </>
  );
}
