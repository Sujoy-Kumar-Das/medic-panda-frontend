"use client";
import CategoriesSkeleton from "@/components/skeleton/CategoriesSkeleton";
import { ICategory } from "@/types";
import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

interface ProductCategoryProps {
  onClose?: () => void;
  categories: ICategory[];
  isLoading: boolean;
}

const ProductCategory = ({
  onClose,
  categories,
  isLoading,
}: ProductCategoryProps) => {
  return (
    <>
      {" "}
      <Typography color={"text.primary"} fontWeight={"bold"} mt={2}>
        Categories
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Stack direction={"column"} spacing={1}>
        {isLoading ? (
          <CategoriesSkeleton />
        ) : (
          <>
            <Typography
              component={Link}
              href={`/product`}
              sx={{
                textDecoration: "none",
                color: "text.secondary",
                fontSize: 18,
                fontWeight: "500",
                display: "block",
                transition: "color 0.3s",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={onClose}
            >
              All
            </Typography>
            {categories.map((item: ICategory) => (
              <Typography
                key={item._id}
                component={Link}
                href={`/product?category=${item._id}`}
                sx={{
                  textDecoration: "none",
                  color: "text.secondary",
                  fontSize: 18,
                  fontWeight: "500",
                  display: "block",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={onClose && onClose}
              >
                {item.name}
              </Typography>
            ))}
          </>
        )}
      </Stack>
    </>
  );
};

export default ProductCategory;
