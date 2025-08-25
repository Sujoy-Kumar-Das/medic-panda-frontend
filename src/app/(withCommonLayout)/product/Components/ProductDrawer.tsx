import { ICategory, IProduct } from "@/types";
import { Box, Grid } from "@mui/material";
import ProductCategory from "./ProductCategory";
import ProductCompo from "./ProductCompo";
import ProductSearchWithCategoryModalButton from "./ProductSearchWithCategoryModalButton";

interface IProductProps {
  products: IProduct[];
  categories: ICategory[];
  meta: any;
}

export default function ProductDrawer({
  products,
  categories,
  meta,
}: IProductProps) {
  return (
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
          {/* product search and category modal */}
          <ProductSearchWithCategoryModalButton categories={categories} />

          {/* product category for medium devices */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <ProductCategory categories={categories} />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={9}>
        <ProductCompo products={products} meta={meta} />
      </Grid>
    </Grid>
  );
}
