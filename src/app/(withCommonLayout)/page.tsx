import AppDownloadSection from "@/components/home/AppDownloadSection/AppDownloadSection";
import CategorySection from "@/components/home/category-section/CategorySection";
import HeroSection from "@/components/home/hero-section/HeroSection";
import HowItsWorkSection from "@/components/home/how-it-works-section/HowItsWorkSection";
import NeedHelpSection from "@/components/home/need-help/NeedHelpSection";
import OurBestSellerProductsSection from "@/components/home/our-best-seller-products/OurBestSellerProductsSection";
import SubscribeSection from "@/components/home/subscribe-section/SubscribeSection";
import TestimonialsSection from "@/components/home/testimonial-section/TestimonialSection";
import WhyChooseSection from "@/components/home/why-chose-us-section/WhyChoseUsSection";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <OurBestSellerProductsSection />
      <HowItsWorkSection />
      <WhyChooseSection />
      <NeedHelpSection />
      <TestimonialsSection />
      <SubscribeSection />
      <AppDownloadSection />
    </>
  );
}
