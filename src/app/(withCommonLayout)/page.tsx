import AboutSection from "@/components/home/AboutSection";
import BabyCareSection from "@/components/home/BabyCareSection";
import BannerSection from "@/components/home/BannerSection";
import BrandSection from "@/components/home/BrandSection";
import CategorySection from "@/components/home/CategorySection";
import ContactSection from "@/components/home/ContactSection";
import DownloadAppSection from "@/components/home/DownloadAppSection";
import FeaturedProductSection from "@/components/home/FeaturedProductSection";
import HealthBasicsSection from "@/components/home/HealthBasicsSection";
import PersonalCareSection from "@/components/home/PersonalCareSection";
import SkinCareProductSection from "@/components/home/SkinCareProductSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import WhyChoseUs from "@/components/home/WhyChoseUs";

export default async function HomePage() {
  return (
    <>
      <BannerSection />
      <WhyChoseUs />
      <CategorySection />
      <FeaturedProductSection />
      <SkinCareProductSection />
      <BabyCareSection />
      <AboutSection />
      <HealthBasicsSection />
      <PersonalCareSection />
      <TestimonialSection />
      <BrandSection />
      <ContactSection />
      <DownloadAppSection />
    </>
  );
}
