import ProductSlider from "@/lib/sliders/ProductSlider";
import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types/product.type";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import DisCountProductCard from "../ui/card/DisCountProductCard";

export default async function DiscountProductSection() {
  const { data: products } = await getAllProductService(6);

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

        <ProductSlider>
          {products.map((product: IProduct) => (
            <DisCountProductCard key={product._id} product={product} />
          ))}
        </ProductSlider>
      </Container>
    </Box>
  );
}
