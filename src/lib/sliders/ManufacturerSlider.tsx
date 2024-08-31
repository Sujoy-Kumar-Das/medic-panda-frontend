"use client";
import { Box, Typography } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function ManufacturerSlider({ data }) {
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
      {data?.map((item) => (
        <SwiperSlide key={item._id}>
          <Box
            sx={{
              background: "linear-gradient(135deg, #f4f4f4, #e0e0e0)",
              p: 5,
              borderRadius: 3,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Typography
              component={"h1"}
              variant="h5"
              textAlign={"center"}
              color={"primary.main"}
              sx={{
                fontWeight: "bold",
                letterSpacing: "0.5px",
                textTransform: "capitalize",
                mb: 2,
              }}
            >
              {item.name}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
