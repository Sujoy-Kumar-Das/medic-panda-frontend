import ProductSlider from "@/lib/sliders/ProductSlider";
import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import ProductCard from "../ui/card/productCard/ProductCard";

export default async function FeaturedProductSection() {
  const { data: products } = await getAllProductService(6);
  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <ProductSlider title="Featured products">
          {products.map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ProductSlider>
      </Container>
    </Box>
  );
}
