"use client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton } from "@mui/material";
import { ReactNode, useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles globally in _app.tsx or layout.tsx
import "swiper/css";
import "swiper/css/navigation";

interface CustomParentSwiperProps {
  children: ReactNode[];
}

export default function CustomSwiper({ children }: CustomParentSwiperProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <Box
      position="relative"
      width="100%"
      className="swiper-container"
      sx={{
        "&:hover .swiper-nav-button": {
          opacity: 1,
          visibility: "visible",
        },
      }}
    >
      {/* Swiper */}
      <Swiper
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {children?.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <IconButton
        ref={prevRef}
        className="swiper-nav-button"
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          bgcolor: "primary.main",
          boxShadow: 2,
          opacity: 0,
          visibility: "hidden",
          transition: "all 0.3s ease",
          zIndex: 10,
          "&:hover": {
            bgcolor: "primary.light",
          },
        }}
      >
        <ChevronLeftIcon sx={{ color: "primary.contrastText" }} />
      </IconButton>

      <IconButton
        ref={nextRef}
        className="swiper-nav-button"
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          bgcolor: "primary.main",
          boxShadow: 2,
          opacity: 0,
          visibility: "hidden",
          transition: "all 0.3s ease",
          zIndex: 10,
          "&:hover": {
            bgcolor: "primary.light",
          },
        }}
      >
        <ChevronRightIcon sx={{ color: "primary.contrastText" }} />
      </IconButton>
    </Box>
  );
}
