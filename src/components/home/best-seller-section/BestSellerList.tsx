import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types";
import { Grid } from "@mui/material";
import BestSellerCard from "./BestSellerCard";

export default async function BestSellerList() {
  const data = await getAllProductService({
    limit: 4,
  });

  const products = data?.data?.result;

  return (
    <Grid container spacing={4}>
      {products?.map((product: IProduct) => (
        <Grid item xs={12} sm={6} lg={3} key={product._id}>
          <BestSellerCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
