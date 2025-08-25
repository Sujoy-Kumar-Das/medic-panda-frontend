import CategorySidebar from "@/app/(withCommonLayout)/product/Components/CategorySidebar";
import ProductCompo from "@/app/(withCommonLayout)/product/Components/ProductCompo";
import { IProduct } from "@/types";
import { Grid } from "@mui/material";

interface ProductPageCompoProps {
  products: IProduct[];
  meta: any;
  layout: string;
}

export default function ProductPageCompo({
  products,
  meta,
  layout,
}: ProductPageCompoProps) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <CategorySidebar />
      </Grid>
      <Grid item xs={12} md={9}>
        <ProductCompo products={products} meta={meta} layout={layout} />
      </Grid>
    </Grid>
  );
}
