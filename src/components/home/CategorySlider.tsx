"use client";
import { ICategory } from "@/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CategorySlider({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <Swiper
      autoplay={{
        pauseOnMouseEnter: true,
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {categories?.map((category, index) => (
        <SwiperSlide key={category._id}>
          <Box
            sx={{
              mt: 2,
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px",
              bgcolor: "background.default",
            }}
          >
            <Box
              sx={{
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              <Image
                alt="Category image"
                src={category.thumbnail}
                height={300}
                width={300}
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                p: 2,
                textAlign: "center",
                position: "absolute",
                bottom: "24px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: 2,
                width: "80%",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                {category.name}
              </Typography>
              <Typography
                variant="body1"
                component={Link}
                href={`/product?category=${category._id}`}
                sx={{
                  color: "white",
                  textDecoration: "underline",
                  fontWeight: "light",
                }}
              >
                View Products
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
