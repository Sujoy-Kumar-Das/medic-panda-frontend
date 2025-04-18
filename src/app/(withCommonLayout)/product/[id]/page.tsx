import { getProductDetailsService } from "@/services/actions/product.service";
import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import ProductDetailsTab from "./Components/ProductDetailsTab";
import ProductQuantity from "./Components/ProductQuantity";

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
    product: { _id, name, price, discount, category, manufacturer },
    description,
  } = data;

  return (
    <>
      {data && (
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
              <Box
                width={{ xs: "100%", md: "50%" }}
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <Typography
                  color={"text.primary"}
                  fontWeight={"bold"}
                  component={"h1"}
                  fontSize={{ xs: 40, md: 60 }}
                >
                  {name}
                </Typography>
                <Rating readOnly value={4} />
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    sx={{
                      color: "text.secondary",
                      textDecoration: discount?.discountPrice
                        ? "line-through"
                        : "none",
                    }}
                  >
                    ${price}
                  </Typography>
                  {discount?.discountPrice && (
                    <Typography
                      variant="body1"
                      fontWeight={"bold"}
                      sx={{
                        color: "text.secondary",
                        textAlign: "center",
                      }}
                    >
                      ${discount?.discountPrice}
                    </Typography>
                  )}
                </Stack>
                <Typography
                  color="text.secondary"
                  fontWeight={"light"}
                  variant="body1"
                  component={"p"}
                  textAlign={"justify"}
                >
                  {description}
                </Typography>
                <ProductQuantity product={data?.product} />
              </Box>
            </Stack>

            {/* product details tab */}
            <ProductDetailsTab
              category={category}
              manufacture={manufacturer}
              productId={_id}
            />
          </Container>
        </Box>
      )}
    </>
  );
}
