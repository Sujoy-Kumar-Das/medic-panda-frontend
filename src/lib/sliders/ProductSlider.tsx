"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ReactNode, useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";

interface ProductSliderProps {
  children: ReactNode[];
  title?: string;
}

export default function ProductSlider({ children, title }: ProductSliderProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Box position="relative">
      {/* Stack to center both title and buttons */}
      <Stack
        direction={{ xs: "column", sm: "row" }} // Stack vertically on small screens
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ mb: 5 }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontWeight: "bold",
            color: "text.secondary",
            textAlign: "left",
            flex: 1,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font sizes
            mb: { xs: 2, sm: 0 }, // Margin bottom for small screens
          }}
        >
          {title}
        </Typography>

        {/* Navigation Buttons */}
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button
            ref={prevRef}
            sx={{
              minWidth: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "transparent",
              color: "text.primary",
              transition: "color 0.3s, background-color 0.3s",
              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff",
              },
            }}
          >
            <ArrowBackIosIcon fontSize="small" />
          </Button>

          <Button
            ref={nextRef}
            sx={{
              minWidth: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "transparent",
              color: "text.primary",
              transition: "color 0.3s, background-color 0.3s",
              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff",
              },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </Box>
      </Stack>

      {/* Swiper Slider */}
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
        modules={[Autoplay, Navigation]}
        onInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          if (navigation) {
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            swiper.navigation?.init();
            swiper.navigation?.update();
          }
        }}
        breakpoints={{
          320: {
            // For mobile screens
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            // For small tablets
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            // For tablets and small desktops
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            // For desktops
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
