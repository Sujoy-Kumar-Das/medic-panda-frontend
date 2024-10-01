import formatOrderDate from "@/utils/format.order.date";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function OrderCard({ order }) {
  return (
    <Box
      py={5}
      px={3}
      borderRadius={2}
      boxShadow={2}
      sx={{
        width: "100%",
        backgroundColor: "background.default",
        transition: "0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 3,
        },
      }}
      my={1}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        {/** Left Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Product Name:
          </Typography>
          <Typography color="text.secondary" variant="body2" textAlign="center">
            {order?.product?.name}
          </Typography>
        </Stack>

        {/** Placed On Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Placed On:
          </Typography>
          <Typography color="text.secondary" variant="body2" textAlign="center">
            {formatOrderDate(order.createdAt)}
          </Typography>
        </Stack>

        {/** Price Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Price:
          </Typography>
          <Typography color="text.secondary" variant="body2" textAlign="center">
            ${order.product.price.toFixed(2)}{" "}
          </Typography>
        </Stack>

        {/** Quantity Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Quantity:
          </Typography>
          <Typography color="text.secondary" variant="body2" textAlign="center">
            {order.quantity}
          </Typography>
        </Stack>

        {/** Total Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Total:
          </Typography>
          <Typography color="text.secondary" variant="body2" textAlign="center">
            ${order.total.toFixed(2)}
          </Typography>
        </Stack>

        {/** Payment Status Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Payment Status:
          </Typography>
          <Typography
            color="primary"
            variant="body2"
            textAlign="center"
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            Paid
          </Typography>
        </Stack>

        {/** Order Status Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Order Status:
          </Typography>
          <Typography
            color="primary"
            variant="body2"
            textAlign="center"
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            {order.status}
          </Typography>
        </Stack>

        {/** Order Status Link */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          component={Link}
          href={`/dashboard/user/orders/${order._id}`}
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
