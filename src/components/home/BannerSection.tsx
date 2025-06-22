import BannerSlider from "@/lib/sliders/BannerSlider";
import { getAllProductService } from "@/services/actions/product.service";

export default async function BannerSection() {
  const data = await getAllProductService({
    category: "671dedca1853a24619a9f991",
  });
  return <BannerSlider data={data?.data?.result} />;
}
