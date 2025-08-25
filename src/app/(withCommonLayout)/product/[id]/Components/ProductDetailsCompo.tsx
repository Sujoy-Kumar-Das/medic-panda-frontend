import AddToCartButton from "@/components/ui/buttons/AddToCartButton";
import { getProductDetailsService } from "@/services/actions/product.service";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import StarIcon from "@mui/icons-material/Star";
import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";

export default async function ProductDetailsCompo({ id }: { id: string }) {
  const { data } = await getProductDetailsService(id);

  const {
    product: { name, price, discount, stockStatus, rating, thumbnail },
    shortDescription,
  } = data;

  const ratingValue = rating.average || Math.floor(Math.random() * 5) + 1;
  const discountPercentage = discount?.discountPrice
    ? Math.round(((price - discount.discountPrice) / price) * 100)
    : 0;

  return (
    <Paper
      elevation={0}
      sx={{
        width: { xs: "100%", md: "50%" },
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        backgroundColor: "background.paper",
        gap: 2,
        p: 4,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      {/* Stock Status */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Chip
          icon={<InventoryIcon />}
          label={stockStatus ? "In Stock" : "Out of Stock"}
          color={stockStatus ? "success" : "error"}
          variant="filled"
          sx={{
            fontWeight: 600,
            borderRadius: 2,
          }}
        />
        {discount?.discountPrice && (
          <Chip
            icon={<LocalOfferIcon />}
            label={`${discountPercentage}% OFF`}
            color="primary"
            variant="filled"
            sx={{
              fontWeight: 600,
              borderRadius: 2,
            }}
          />
        )}
      </Stack>

      {/* Product Name */}
      <Typography
        color={"text.primary"}
        fontWeight={"bold"}
        component={"h1"}
        variant="h3"
        sx={{
          background: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.2,
        }}
      >
        {name}
      </Typography>

      {/* Rating */}
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            bgcolor: "primary.light",
            color: "primary.contrastText",
            px: 1.5,
            py: 0.5,
            borderRadius: 3,
          }}
        >
          <StarIcon sx={{ fontSize: 18 }} />
          <Typography variant="body2" fontWeight={600}>
            {ratingValue.toFixed(1)}
          </Typography>
        </Box>
        <Typography color={"text.secondary"} variant="body2">
          ({rating.count || 200} reviews)
        </Typography>
      </Stack>

      <Divider sx={{ width: "100%", my: 1 }} />

      {/* Price */}
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        {discount?.discountPrice ? (
          <>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              sx={{
                color: "primary.main",
              }}
            >
              ${discount.discountPrice}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",
              }}
            >
              ${price}
            </Typography>
          </>
        ) : (
          <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{
              color: "primary.main",
            }}
          >
            ${price}
          </Typography>
        )}
      </Stack>

      {/* Short Description */}
      <Box
        sx={{
          p: 2,
          bgcolor: "grey.50",
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          color="text.secondary"
          variant="body1"
          component={"p"}
          lineHeight={1.6}
          sx={{
            fontStyle: "italic",
          }}
        >
          {shortDescription}
        </Typography>
      </Box>

      {/* Add to Cart Button */}
      <AddToCartButton
        product={data?.product}
        icon={false}
        sx={{
          width: "100%",
          py: 2,
          borderRadius: 3,
        }}
      >
        <ShoppingCartCheckoutIcon sx={{ mr: 1 }} />
        Add To Cart
      </AddToCartButton>

      {/* Additional Info */}
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ width: "100%", mt: 1 }}
      >
        <Box
          sx={{
            textAlign: "center",
            p: 1,
            borderRadius: 2,
            bgcolor: "grey.50",
            flex: 1,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Free Shipping
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            p: 1,
            borderRadius: 2,
            bgcolor: "grey.50",
            flex: 1,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            30-Day Returns
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            p: 1,
            borderRadius: 2,
            bgcolor: "grey.50",
            flex: 1,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Secure Payment
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
