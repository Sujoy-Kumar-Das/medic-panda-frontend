import ProductSlider from "@/lib/sliders/ProductSlider";
import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types/product.type";
import { Box, Container } from "@mui/material";
import SkinCareProductCard from "../ui/card/SkinCareProductCard";

export default async function SkinCareProductSection() {
  const { data: products } = await getAllProductService({
    limit: 9,
    category: "Skin Care",
  });

  return (
    <>
      {products.length && (
        <Box sx={{ backgroundColor: "background.paper" }}>
          <Container sx={{ py: 10 }}>
            <ProductSlider title="Simple Skin Care Solutions">
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
