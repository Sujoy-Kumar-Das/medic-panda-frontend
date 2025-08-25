import { IProduct } from "@/types";
import { Box, CardContent, Chip, Rating, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../../buttons/AddToCartButton";
import WishListButton from "../../buttons/WishListButton";

export default function ProductCardVertical({
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
        display: "block",
        borderRadius: 3,
        position: "relative",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        overflow: "hidden",
        boxShadow: 4,
        transition: "all 0.3s ease",
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Image + Wishlist + Badge */}
      <Box sx={{ position: "relative" }}>
        <Link href={`/product/${product._id}`}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
              px: 1,
              pt: 1,
              overflow: "hidden",
              bgcolor: "background.default",
            }}
          >
            <Image
              src={product.thumbnail}
              alt={product.name}
              height={160}
              width={160}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Link>

        {/* Wishlist Button */}
        <WishListButton id={product._id} isWishList={product.isWishList} />

        {/* Discount Badge */}
        {hasDiscount && (
          <Chip
            label={`-${hasDiscount.percentage}%`}
            size="small"
            color="primary"
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              fontWeight: "bold",
              color: "white",
            }}
          />
        )}
      </Box>

      {/* Product Content */}
      <CardContent sx={{ p: 2 }}>
        {/* Title + Category + Price */}
        <Box display="flex" justifyContent="space-between" gap={2}>
          <Box flex={1}>
            <Link
              href={`/product/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                fontWeight="medium"
                variant="subtitle1"
                color="text.primary"
                noWrap
              >
                {product.name}
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary" noWrap>
              {product?.category?.name || "Category"}
            </Typography>
          </Box>

          <Box textAlign="right" minWidth={80}>
            <Typography fontWeight="bold" color="secondary.main">
              ${discountPrice?.toFixed(2)}
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

        {/* Rating + Cart Button */}
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            <Rating value={rating} readOnly size="small" />
            <Typography variant="caption" ml={0.5} color="text.secondary">
              ({product.rating.count})
            </Typography>
          </Box>
          <AddToCartButton product={product} />
        </Box>
      </CardContent>
    </Box>
  );
}
