import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types";
import { Grid } from "@mui/material";
import BestSellerProductCard from "./BestSellerProductCard";
export default async function BestSellerProductList() {
  const { data } = await getAllProductService({ limit: 4 });

  const products = data?.result;
  return (
    <Grid container spacing={4}>
      {products?.map((product: IProduct) => (
        <Grid key={product._id} item xs={12} sm={6} lg={3}>
          <BestSellerProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
