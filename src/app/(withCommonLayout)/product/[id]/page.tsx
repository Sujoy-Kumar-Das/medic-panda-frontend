import { getProductDetailsService } from "@/services/actions/product.service";
import { Box, Container, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import ProductDetailsCompo from "./Components/ProductDetailsCompo";
import ProductDetailsTab from "./Components/ProductDetailsTab";
const ProductDetailsSlider = dynamic(
  () => import("./Components/ProductDetailsSlider")
);
export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await getProductDetailsService(params.id);

  const {
    images,
    product: { _id, name, price, discount, category, manufacturer, rating },
    description,
  } = data;

  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={4}
        >
          <Box width={{ xs: "100%", md: "50%" }}>
            <ProductDetailsSlider images={images} />
          </Box>
          <ProductDetailsCompo id={params.id} />
        </Stack>

        {/* product details tab */}
        <ProductDetailsTab
          category={category}
          manufacture={manufacturer}
          productId={_id}
        />
      </Container>
    </Box>
  );
}
