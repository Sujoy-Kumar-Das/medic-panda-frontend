"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Paper, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
export default function ProductDetailsSlider({ images }: { images: string[] }) {
  const [currentImageUrl, setCurrentImageUrl] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (image: string, index: number) => {
    setCurrentImageUrl(image);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImageUrl(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImageUrl(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <Box
      sx={{
        "&:hover .btn-show": {
          display: "block",
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
          borderRadius: 4,
          border: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
          backgroundColor: "background.paper",
          position: "relative",
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        }}
      >
        <Image
          alt={`Product Image`}
          src={currentImageUrl}
          height={400}
          width={400}
          style={{
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />

        {images.length > 1 && (
          <Box className="btn-show" sx={{ display: "none" }}>
            <Box
              onClick={prevImage}
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "background.paper",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "1px solid",
                borderColor: "divider",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
            >
              <ArrowBackIcon />
            </Box>
            <Box
              onClick={nextImage}
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "background.paper",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "1px solid",
                borderColor: "divider",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
            >
              <ArrowForwardIcon />
            </Box>
          </Box>
        )}
      </Paper>

      {images.length > 1 && (
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
          mt={3}
          justifyContent="center"
        >
          {images.map((image, index) => (
            <Paper
              key={image}
              elevation={0}
              sx={{
                border: currentIndex === index ? "2px solid" : "1px solid",
                borderColor:
                  currentIndex === index ? "primary.main" : "divider",
                height: 80,
                width: 80,
                p: 1,
                borderRadius: 3,
                backgroundColor: "background.paper",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => handleThumbnailClick(image, index)}
            >
              <Image
                alt={`Thumbnail ${index + 1}`}
                src={image}
                height={60}
                width={60}
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Paper>
          ))}
        </Stack>
      )}
    </Box>
  );
}
