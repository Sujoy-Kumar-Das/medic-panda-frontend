import CommonHeader from "@/components/shared/header/CommonHeader";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import ProductCardVertical from "@/components/ui/card/productCard/ProductCardVertical";
import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types";
import { Box, Grid } from "@mui/material";
import { Suspense } from "react";

export default async function FeaturedProducts() {
  const {
    data: { result },
  } = await getAllProductService({
    limit: 4,
  });
  return (
    <Box sx={{ my: 10 }}>
      <CommonHeader
        title="Featured Products"
        subtitle="Popular products across our categories"
      />

      <Suspense fallback={<CardSkeleton count={4} />}>
        <Grid container spacing={2}>
          {result?.map((product: IProduct) => (
            <Grid item xs={12} sm={6} lg={3} key={product._id}>
              <ProductCardVertical product={product} />
            </Grid>
          ))}
        </Grid>
      </Suspense>
    </Box>
  );
}
