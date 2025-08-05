"use client";

import { ICategory } from "@/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCategoryCardProps {
  onClose?: () => void;
  category: ICategory;
}

export default function ProductCategoryCard({
  category,
  onClose,
}: ProductCategoryCardProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/product/${category._id}`);
    onClose?.();
  };

  return (
    <Box
      onClick={handleNavigate}
      sx={{
        cursor: "pointer",
        bgcolor: "background.paper",
        p: 0.8,
        display: "flex",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: 2,
        gap: 1,
        transition: "all 0.3s ease",
        border: "none",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 4,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 20,
          height: 20,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={category.thumbnail}
          alt={category.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Typography variant="subtitle1" color="text.primary" fontWeight={500}>
        {category.name}
      </Typography>
    </Box>
  );
}
