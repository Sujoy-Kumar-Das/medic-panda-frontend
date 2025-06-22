"use client";
import Header from "@/components/shared/header/Header";
import { IProduct } from "@/types";
import { Container, Grid } from "@mui/material";
import WishListCard from "./WishListCard";

interface IWishListProduct {
  user: string;
  _id: string;
  product: IProduct;
}
function WishListCompo({ data }: { data: IWishListProduct[] }) {
  return (
    <Container>
      <Header
        title="Your Wishlist"
        subtitle="Save your favorite products and easily access them for future purchases."
      />

      <Grid container spacing={5} pb={5}>
        {data?.map((wishlistItem) => (
          <Grid item xs={12} sm={6} md={4} key={wishlistItem._id}>
            <WishListCard product={wishlistItem?.product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default WishListCompo;
