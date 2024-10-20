import ProductSlider from "@/lib/sliders/ProductSlider";
import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types/product.type";
import { Box, Container } from "@mui/material";
import DisCountProductCard from "../ui/card/DisCountProductCard";

export default async function ProductsOnSaleSection() {
  const { data: products } = await getAllProductService(6);

  return (
    <Box sx={{ backgroundColor: "background.paper" }}>
      <Container sx={{ py: 10 }}>
        <ProductSlider title="Products on Sale">
          {products.map((product: IProduct) => (
            <DisCountProductCard key={product._id} product={product} />
          ))}
        </ProductSlider>
      </Container>
    </Box>
  );
}
