import AddToCartButton from "@/components/ui/buttons/AddToCartButton";
import { getProductDetailsService } from "@/services/actions/product.service";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box, Chip, Rating, Stack, Typography } from "@mui/material";
export default async function ProductDetailsCompo({ id }: { id: string }) {
  const { data } = await getProductDetailsService(id);

  const {
    product: { name, price, discount, stockStatus, rating },
    description,
  } = data;

  const ratingValue = rating.average || Math.floor(Math.random() * 5) + 1;

  console.log({ data });
  return (
    <Box
      width={{ xs: "100%", md: "50%" }}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        backgroundColor: "background.default",
        gap: 1,
        p: 4,
        borderRadius: 4,
      }}
    >
      <Chip
        label={stockStatus ? "In Stock" : "Out of Stock"}
        color={stockStatus ? "success" : "error"}
      />

      <Typography
        color={"text.primary"}
        fontWeight={"bold"}
        component={"h1"}
        variant="h4"
      >
        {name}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={1} my={1}>
        <Rating readOnly size="medium" value={ratingValue} />
        <Typography color={"text.secondary"} variant="body1" component={"p"}>
          {ratingValue} ({rating.count || 200} reviews)
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <Typography
          variant="body1"
          fontWeight={"bold"}
          sx={{
            color: "text.secondary",
            textDecoration: discount?.discountPrice ? "line-through" : "none",
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

      <AddToCartButton product={data?.product}>
        Add To Cart <ShoppingCartCheckoutIcon />
      </AddToCartButton>
    </Box>
  );
}
