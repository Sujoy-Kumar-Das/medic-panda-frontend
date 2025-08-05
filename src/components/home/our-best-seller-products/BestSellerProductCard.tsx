import AddToCartButton from "@/components/ui/buttons/AddToCartButton";
import { IProduct } from "@/types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  IconButton,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function BestSellerProductCard({
  product,
}: {
  product: IProduct;
}) {
  const rating = product.rating.average || Math.floor(Math.random() * 5) + 1;
  const hasDiscount = product?.discount?.discountPrice;

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          "& .add-to-cart-btn": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Discount Badge */}
      {hasDiscount && (
        <Chip
          label={`${product.discount.percentage}% OFF`}
          color="error"
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            fontWeight: 600,
            zIndex: 1,
          }}
        />
      )}

      {/* Quick View Button */}
      <Tooltip title="Quick view" arrow>
        <IconButton
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            backgroundColor: "rgba(255,255,255,0.8)",
            zIndex: 1,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.9)",
            },
          }}
        >
          <VisibilityIcon fontSize="small" sx={{ color: "primary.light" }} />
        </IconButton>
      </Tooltip>

      <CardActionArea component={Link} href={`/products/${product._id}`}>
        {/* Product Image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 200,
            overflow: "hidden",
          }}
        >
          <Image
            src={product.thumbnail || "/placeholder-product.jpg"}
            alt={product.name}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          {/* Product Name */}
          <Typography
            variant="subtitle1"
            component="h3"
            sx={{
              fontWeight: 600,
              mb: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.name}
          </Typography>

          {/* Rating */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <Rating
              value={rating}
              precision={0.5}
              readOnly
              size="small"
              sx={{ color: "warning.main" }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ ml: 0.5 }}
            >
              ({rating.toFixed(1)})
            </Typography>
          </Box>

          {/* Price */}
          <Stack direction="row" alignItems="center" spacing={1}>
            {hasDiscount && (
              <Typography variant="h6" color="error" sx={{ fontWeight: 700 }}>
                ${product?.discount?.discountPrice?.toFixed(2)}
              </Typography>
            )}
            <Typography
              variant={hasDiscount ? "body2" : "h6"}
              sx={{
                fontWeight: hasDiscount ? 400 : 700,
                color: hasDiscount ? "text.secondary" : "text.primary",
                textDecoration: hasDiscount ? "line-through" : "none",
              }}
            >
              ${product.price.toFixed(2)}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>

      {/* Add to Cart Button */}
      <Box sx={{ p: 2, pt: 0 }} className="add-to-cart-btn">
        <AddToCartButton product={product} />
      </Box>
    </Card>
  );
}
