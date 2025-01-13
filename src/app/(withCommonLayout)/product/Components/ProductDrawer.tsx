"use client";
import { IProduct } from "@/types";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import CategoryModal from "./CategoryModal";
import ProductCategory from "./ProductCategory";
import ProductSearch from "./ProductSearch";
import Products from "./Products";

interface IProductProps {
  products: IProduct[];
  meta: any;
}

export default function ProductDrawer({ products, meta }: IProductProps) {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              height: { xs: "auto", md: "100vh" },
              backgroundColor: { xs: "transparent", md: "background.default" },
              padding: { xs: 2, md: 3 },
              borderRadius: 2,
              position: { md: "sticky" },
              top: 0,
              width: "100%",
            }}
          >
            <ProductSearch setOpenCategoryModal={setOpenCategoryModal} />

            <Box
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <ProductCategory />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          <Products products={products} meta={meta} />
        </Grid>
      </Grid>

      {/* category modal for mobile */}
      <CategoryModal open={openCategoryModal} setOpen={setOpenCategoryModal} />
    </>
  );
}
