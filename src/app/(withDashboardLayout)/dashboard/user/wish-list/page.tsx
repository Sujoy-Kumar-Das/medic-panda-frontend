import { Box, Container, Grid, Typography } from "@mui/material";

export default async function WishListPage() {
  const url = `https://dummyjson.com/products`;

  const res = await fetch(url, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <Container>
      <Box mb={3}>
        <Typography component="h1" variant="h4" color="text.primary">
          Order History
        </Typography>
        <Typography component="h1" variant="h6" color="text.secondary">
          Track, return or purchase items
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {data?.products.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            {/* <WishListCard data={item} key={item.id} /> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
