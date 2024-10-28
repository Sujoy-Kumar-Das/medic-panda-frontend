import ProductSlider from "@/lib/sliders/ProductSlider";
import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types/product.type";
import { Box, Container } from "@mui/material";
import SkinCareProductCard from "../ui/card/SkinCareProductCard";

export default async function BabyCareSection() {
  const { data: products } = await getAllProductService({
    limit: 9,
    category: "Baby Essentials",
  });

  return (
    <>
      {products.length && (
        <Box sx={{ backgroundColor: "background.paper" }}>
          <Container sx={{ py: 10 }}>
            <ProductSlider title="Quality Products for Happy Babies">
              {products.map((product: IProduct) => (
                <SkinCareProductCard key={product._id} product={product} />
              ))}
            </ProductSlider>
          </Container>
        </Box>
      )}
    </>
  );
}
