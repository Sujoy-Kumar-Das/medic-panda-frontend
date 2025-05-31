import AddToCartButton from "@/components/ui/buttons/AddToCartButton";
import { getProductDetailsService } from "@/services/actions/product.service";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
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
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: 1,
                }}
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

                <AddToCartButton product={data?.product} iconBtn={false}>
                  Add To Cart <ShoppingCartCheckoutIcon />
                </AddToCartButton>
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
