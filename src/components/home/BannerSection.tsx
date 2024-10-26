import BannerSlider from "@/lib/sliders/BannerSlider";
import { getAllProductService } from "@/services/actions/product.service";

export default async function BannerSection() {
  const data = await getAllProductService();
  return <BannerSlider data={data?.data} />;
}
