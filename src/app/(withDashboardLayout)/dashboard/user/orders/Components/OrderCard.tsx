import { IOrder } from "@/types";
import formatOrderDate from "@/utils/format.order.date";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import OrderCancelButton from "./OrderCancelButton";
import OrderInfo from "./OrderInfo";
import OrderPaymentButton from "./OrderPaymentButton";

export default function OrderCard({ order }: { order: IOrder }) {
  const { quantity, product, total, createdAt, status, _id } = order;

  return (
    <Box
      py={5}
      px={3}
      borderRadius={2}
      boxShadow={2}
      textTransform="capitalize"
      sx={{
        width: "100%",
        backgroundColor: "background.default",
      }}
      my={1}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        {/* Product Information */}
        <OrderInfo label="Product Name" value={product?.name || "N/A"} />
        <OrderInfo label="Placed On" value={formatOrderDate(createdAt)} />
        <OrderInfo label="Price" value={`$${product?.price?.toFixed(2)}`} />
        <OrderInfo label="Quantity" value={`${quantity}`} />
        <OrderInfo label="Total" value={`$${total.toFixed(2)}`} />

        {/* Payment Status */}
        <OrderPaymentButton status={status} id={_id} />
        {/* Order Status */}
        <OrderInfo label="Order Status" value={status} />

        {/* Cancel Order Action */}
        <OrderCancelButton id={_id} status={status} />

        {/* View Order Link */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          component={Link}
          href={`/dashboard/user/orders/${_id}`}
          sx={{
            textDecoration: "none",
            color: "primary.main",
            "&:hover": {
              color: "secondary.main",
              transform: "translateX(2px)",
            },
          }}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            View Order
          </Typography>
          <ArrowForwardIosOutlinedIcon fontSize="small" />
        </Stack>
      </Stack>
    </Box>
  );
}
