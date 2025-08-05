"use client";
import { ICategory } from "@/types";
import { Divider, Stack, Typography } from "@mui/material";
import ProductCategoryList from "./ProductCategoryList";

interface ProductCategoryProps {
  onClose?: () => void;
  categories: ICategory[];
}

const ProductCategory = ({ onClose, categories }: ProductCategoryProps) => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={1}
      >
        <Typography color={"text.primary"} fontWeight={"bold"} mt={2}>
          Categories
        </Typography>

        <Typography
          variant="h6"
          component={"button"}
          color={"primary.main"}
          border={"none"}
          bgcolor={"transparent"}
          boxShadow={0}
        >
          Reset
        </Typography>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack direction={"column"} spacing={1}>
        <ProductCategoryList categories={categories} />
      </Stack>
    </>
  );
};

export default ProductCategory;
