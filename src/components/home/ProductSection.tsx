import { IProduct } from "@/types/product.type";
import { ArrowRight } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ProductCard from "../ui/card/ProductCard";

export default async function ProductSection() {
  const res = await fetch(`${process.env.base_url_local}/product`, {
    cache: "no-store",
  });
  const { data: products } = await res.json();

  return (
    <Container sx={{ py: 10 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "text.secondary" }}
        >
          Featured products
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/"
          endIcon={<ArrowRight />}
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "0.875rem",
          }}
        >
          View Products
        </Button>
      </Box>

      <Grid container spacing={2}>
        {products.map((product: IProduct) => (
          <Grid item xs={12} md={3} key={product._id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
