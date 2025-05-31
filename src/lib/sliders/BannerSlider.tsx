"use client";
import BannerSliderCard from "@/components/home/BannerSliderCard";
import { IProduct } from "@/types";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BannerSlider({ data }: { data: IProduct[] }) {
  const [swiper, setSwiper] = useState(0);

  // Function for handle Swiper current index
  const handleSwiperInit = (swiper: any) => {
    setSwiper(swiper.activeIndex);

    swiper.on("slideChange", () => {
      setSwiper(swiper.activeIndex);
    });
  };
  return (
    <Swiper
      onSwiper={handleSwiperInit}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data?.map((item, index) => (
        <SwiperSlide key={item._id}>
          <BannerSliderCard item={item} isActive={index === swiper} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
