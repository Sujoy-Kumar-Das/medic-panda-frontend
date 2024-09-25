import ProductSlider from "@/lib/sliders/ProductSlider";
import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types";
import { ArrowRight } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ProductCard from "../ui/card/productCard/ProductCard";

export default async function ProductSection() {
  const { data: products } = await getAllProductService(6);
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

      <ProductSlider>
        {products.map((product: IProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ProductSlider>
    </Container>
  );
}
