"use client";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetailsSlider({ images }: { images: string[] }) {
  const [currentImageUrl, setCurrentImageUrl] = useState(images[0]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
          borderRadius: 4,
          boxShadow: 1,
          overflow: "hidden",
          backgroundColor: "background.default",
          "& img": {
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Image
          alt={`Product Image`}
          src={currentImageUrl}
          height={350}
          width={350}
          style={{ borderRadius: "16px" }}
        />
      </Box>

      <Stack direction={"row"} alignItems={"center"} gap={2} mt={4}>
        {images.map((image, index) => (
          <Box
            key={image}
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
            onClick={() => setCurrentImageUrl(image)}
          >
            <Image
              alt={`Thumbnail Image ${index + 1}`}
              src={image}
              height={50}
              width={50}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
