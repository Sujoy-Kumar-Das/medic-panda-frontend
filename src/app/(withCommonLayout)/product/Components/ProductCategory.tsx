"use client";
import { ICategory } from "@/types";
import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

interface ProductCategoryProps {
  onClose?: () => void;
  categories: ICategory[];
}

const ProductCategory = ({ onClose, categories }: ProductCategoryProps) => {
  return (
    <>
      {" "}
      <Typography color={"text.primary"} fontWeight={"bold"} mt={2}>
        Categories
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Stack direction={"column"} spacing={1}>
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
        {categories?.map((item: ICategory) => (
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
      </Stack>
    </>
  );
};

export default ProductCategory;
