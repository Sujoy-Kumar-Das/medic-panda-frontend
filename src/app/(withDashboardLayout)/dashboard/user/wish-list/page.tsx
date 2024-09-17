"use client";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetAllWishListProductsQuery } from "@/redux/api/wish-listApi";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function WishListPage() {
  const { data, isLoading } = useGetAllWishListProductsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  console.log(data);

  return (
    <Container>
      {data?.products?.length ? (
        <>
          <Box mb={3}>
            <Typography component="h1" variant="h4" color="text.primary">
              Order History
            </Typography>
            <Typography component="h1" variant="h6" color="text.secondary">
              Track, return or purchase items
            </Typography>
          </Box>
          <Grid container spacing={5}>
            {data.products.map((item) => (
              <Grid item xs={12} md={4} key={item.id}>
                {/* <WishListCard data={item} key={item.id} /> */}
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <NoDataFound
          link="/product"
          text="Buy Something"
          message="Your wish list is empty"
        />
      )}
    </Container>
  );
}
