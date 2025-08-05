import { IProduct } from "@/types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  CardContent,
  Chip,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ProductCardHorizontal({
  product,
}: {
  product: IProduct;
}) {
  const hasDiscount = product?.discount;
  const totalOff = hasDiscount?.percentage || 0;
  const discountPrice = hasDiscount
    ? product.price - (product.price * totalOff) / 100
    : product.price;

  const rating = product?.rating?.average || Math.floor(Math.random() * 5) + 1;

  return (
    <Box
      sx={{
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        position: "relative",
        boxShadow: 4,
        transition: "all 0.3s ease",
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Product Image */}
      <Box
        sx={{
          width: 200,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
        }}
      >
        <Link href={`/product/${product._id}`}>
          <Image
            height={140}
            width={180}
            src={product.thumbnail}
            alt={product.name}
            style={{ objectFit: "contain", padding: 8 }}
          />
        </Link>

        {/* Wishlist Button */}
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "#fff",
            boxShadow: 1,
            "&:hover": { color: "red" },
          }}
        >
          <FavoriteIcon />
        </IconButton>

        {/* Discount Badge */}
        {hasDiscount && (
          <Chip
            label={`-${totalOff}%`}
            size="small"
            color="primary"
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              fontWeight: "bold",
              color: "background.paper",
            }}
          />
        )}
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: 2,
        }}
      >
        <Box display="flex" justifyContent="space-between" gap={2}>
          <Box>
            <Link
              href={`/product/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="text.primary"
              >
                {product.name}
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              {product?.category?.name || "Category"}
            </Typography>
          </Box>

          <Box textAlign="right">
            <Typography fontWeight="bold" color="secondary.main">
              ${discountPrice.toFixed(2)}
            </Typography>
            {hasDiscount && (
              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ textDecoration: "line-through" }}
              >
                ${product.price.toFixed(2)}
              </Typography>
            )}
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          flexDirection={{ xs: "column", md: "row" }}
          gap={1}
          mt={2}
        >
          <Box display="flex" alignItems="center">
            <Rating value={rating} readOnly size="small" />
            <Typography variant="caption" ml={0.5} color="text.secondary">
              ({product.rating.count})
            </Typography>
          </Box>

          <Button
            size="small"
            startIcon={<ShoppingCartIcon fontSize="small" />}
            sx={{
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              px: 2,
              py: 0.5,
              textTransform: "none",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Box>
  );
}
