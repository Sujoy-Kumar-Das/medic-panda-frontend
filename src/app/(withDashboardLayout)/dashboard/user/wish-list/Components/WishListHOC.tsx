import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import Header from "@/components/shared/header/Header";
import { IProduct } from "@/types";
import { Container, Grid } from "@mui/material";
import WishListCard from "./WishListCard";

function WishListCompo({ data }: { data: IProduct[] }) {
  return (
    <Container>
      <Header
        title="Your Wishlist"
        subtitle="Save your favorite products and easily access them for future purchases."
      />

      <Grid container spacing={5}>
        {data?.map((product: IProduct) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <WishListCard product={product?.product} key={product._id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const WishListProductWithHOC = HandleLoadingErrorAndNoData(WishListCompo);

export default WishListProductWithHOC;
