"use client";
import ErrorPage from "@/components/shared/error/Error";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetAllWishListProductsQuery } from "@/redux/api/wish-listApi";
import { IGenericErrorResponse } from "@/types";
import { Container, Grid } from "@mui/material";
import WishListCard from "./Components/WishListCard";

export default function WishListPage() {
  const { data, isLoading, error } = useGetAllWishListProductsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error={error as IGenericErrorResponse} />;
  }

  if (!data?.length) {
    return (
      <NoDataFound
        link="/product"
        text="Start Shopping"
        message="Your wishlist is empty. Add items to your wishlist and come back here to view them."
      />
    );
  }

  return (
    <Container>
      <Header
        title="Your Wishlist"
        subtitle="Save your favorite products and easily access them for future purchases."
      />

      <Grid container spacing={5}>
        {data?.map(({ product }) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <WishListCard product={product} key={product._id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
