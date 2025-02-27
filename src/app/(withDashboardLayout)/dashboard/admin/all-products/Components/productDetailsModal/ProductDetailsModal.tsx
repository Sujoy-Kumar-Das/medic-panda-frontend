import CustomModal from "@/components/customModal/CustomModal";
import { useGetSingleProductQuery } from "@/redux/api/product.api";
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
import ProductDetailsModalSkeleton from "./productDetailsModal/ProductDetailsModalSkeleton";

export default function ProductDetailsModal({ open, setOpen, productId }) {
  const { data: product, isLoading } = useGetSingleProductQuery(productId);

  if (isLoading) {
    return <ProductDetailsModalSkeleton open={open} setOpen={setOpen} />;
  }

  const productData = product?.product;

  return (
    <CustomModal open={open} setOpen={setOpen} closeBtn={false}>
      <Box
        sx={{
          p: 4,
          display: "flex",
          justifyContent: "center",
          bgcolor: "background.default",
        }}
      >
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
              src={productData?.thumbnail}
              alt={productData?.name}
              width={220}
              height={220}
              style={{ borderRadius: 8, border: "1px solid #ddd" }}
            />
            <Typography variant="h5" fontWeight={600}>
              {productData?.name}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                Category: {productData?.category?.name}
              </Typography>
              <Tooltip title="Manufacturer Info">
                <InfoOutlined fontSize="small" />
              </Tooltip>
              <Typography variant="body2" color="text.secondary">
                {productData?.manufacturer?.name}
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
                ${productData?.price}
              </Typography>
              {productData?.discount?.discountStatus && (
                <Chip
                  label={`-${productData?.discount.percentage}% | Now $${productData?.discount.discountPrice}`}
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
                label={productData?.stockStatus ? "In Stock" : "Out of Stock"}
                color={productData?.stockStatus ? "primary" : "error"}
                sx={{ fontWeight: 500 }}
              />
            </Grid>

            {/* Rating & Wishlist */}
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontWeight={600}>
                Product Rating:
              </Typography>
              <Chip
                label={`⭐ ${productData?.rating}`}
                color="warning"
                sx={{ fontWeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontWeight={600}>
                Wishlist Status:
              </Typography>
              <Chip
                label={
                  productData?.isWishList ? "In Wishlist" : "Not in Wishlist"
                }
                color={productData?.isWishList ? "info" : "default"}
                sx={{ fontWeight: 500 }}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Discount Period */}
          {productData?.discount?.discountStatus && (
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
                {productData?.discount.startDate} (
                {productData?.discount.startTime}) →{" "}
                {productData?.discount.endDate} ({productData?.discount.endTime}
                )
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </CustomModal>
  );
}
