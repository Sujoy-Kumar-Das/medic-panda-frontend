"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

export default function ProductDetailsSlider({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      {images && (
        <Box>
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            style={{ marginBottom: "20px" }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 2,
                    overflow: "hidden",
                    "& img": {
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Image
                    alt={`Product Image ${index + 1}`}
                    src={image}
                    height={350}
                    width={350}
                    style={{ borderRadius: "16px" }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    border: "2px solid transparent",
                    height: 80,
                    width: 80,
                    padding: 1,
                    borderRadius: 2,
                    backgroundColor: "background.default",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "border-color 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <Image
                    alt={`Thumbnail Image ${index + 1}`}
                    src={image}
                    height={50}
                    width={50}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </>
  );
}
