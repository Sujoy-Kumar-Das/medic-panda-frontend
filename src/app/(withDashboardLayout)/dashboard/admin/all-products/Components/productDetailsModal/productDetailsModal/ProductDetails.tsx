import { InfoOutlined } from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
export default function ProductDetails({ product }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        p: 4,
        border: 1,
        borderColor: "grey.300",
        borderRadius: 2,
      }}
    >
      {/* Product Header */}
      <Stack spacing={3} alignItems="center">
        <Image
          src={product?.thumbnail}
          alt={product?.name}
          width={220}
          height={220}
          style={{ borderRadius: 8, border: "1px solid #ddd" }}
        />
        <Typography variant="h5" fontWeight={600}>
          {product?.name}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Category: {product?.category?.name}
          </Typography>
          <Tooltip title="Manufacturer Info">
            <InfoOutlined fontSize="small" />
          </Tooltip>
          <Typography variant="body2" color="text.secondary">
            {product?.manufacturer?.name}
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ my: 3 }} />

      {/* Product Information Grid */}
      <Grid container spacing={3}>
        {/* Pricing */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" fontWeight={600}>
            Price:
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            ${product?.price}
          </Typography>
          {product?.discount?.discountStatus && (
            <Chip
              label={`-${product?.discount.percentage}% | Now $${product?.discount.discountPrice}`}
              color="success"
              sx={{ mt: 1, fontWeight: 500 }}
            />
          )}
        </Grid>

        {/* Stock Status */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" fontWeight={600}>
            Stock Status:
          </Typography>
          <Chip
            label={product?.stockStatus ? "In Stock" : "Out of Stock"}
            color={product?.stockStatus ? "primary" : "error"}
            sx={{ fontWeight: 500 }}
          />
        </Grid>

        {/* Rating & Wishlist */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" fontWeight={600}>
            Product Rating:
          </Typography>
          <Chip
            label={`⭐ ${product?.rating}`}
            color="warning"
            sx={{ fontWeight: 500 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" fontWeight={600}>
            Wishlist Status:
          </Typography>
          <Chip
            label={product?.isWishList ? "In Wishlist" : "Not in Wishlist"}
            color={product?.isWishList ? "info" : "default"}
            sx={{ fontWeight: 500 }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Discount Period */}
      {product?.discount?.discountStatus && (
        <Box
          sx={{
            bgcolor: "green.50",
            p: 2,
            borderRadius: 1,
            border: 1,
            borderColor: "green.300",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Discount Period:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.discount.startDate} ({product?.discount.startTime}) →{" "}
            {product?.discount.endDate} ({product?.discount.endTime})
          </Typography>
        </Box>
      )}
    </Box>
  );
}
