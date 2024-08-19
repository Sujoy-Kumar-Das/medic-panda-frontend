import { IProduct } from "@/types/product.type";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import DisCountProductCard from "../ui/card/DisCountProductCard";

export default async function DiscountProductSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_base_url_local}/product`, {
    cache: "no-store",
  });
  const { data: products } = await res.json();

  return (
    <Box sx={{ py: 5, backgroundColor: "background.paper" }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography
            variant="h4"
            component="h1"
            color="text.secondary"
            fontWeight="bold"
          >
            Products on Sale
          </Typography>
          <Button
            component={Link}
            href="/"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            View Products
          </Button>
        </Stack>
        <Grid container spacing={4}>
          {products.map((product: IProduct) => (
            <Grid item xs={12} md={3} key={product._id}>
              <DisCountProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
