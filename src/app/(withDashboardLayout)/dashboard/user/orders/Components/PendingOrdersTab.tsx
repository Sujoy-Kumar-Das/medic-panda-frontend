import DashboardLoader from "@/components/shared/loader/DashboardLoader";
import { useGetAllOrderQuery } from "@/redux/api/order.api";
import formatOrderDate from "@/utils/format.order.date";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function PendingOrdersTab() {
  const { data, isLoading } = useGetAllOrderQuery({ status: "pending" });

  if (isLoading) {
    return <DashboardLoader />;
  }

  return (
    <Stack>
      {data?.map((order) => (
        <Box
          key={order._id}
          p={3}
          borderRadius={2}
          sx={{
            width: "100%",
            transition: " 0.3s ease",
            "&:hover": {
              backgroundColor: "background.default",
            },
          }}
          my={1}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={1}
          >
            <Stack
              direction={{ xs: "row", md: "column" }}
              alignItems="flex-start"
              spacing={1}
            >
              <Typography variant="body1" fontWeight={500}>
                Name
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {order?.product?.name}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "row", md: "column" }}
              alignItems="flex-start"
              spacing={1}
            >
              <Typography variant="body1" fontWeight={500}>
                Placed On
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {formatOrderDate(order.createdAt)}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "row", md: "column" }}
              alignItems="flex-start"
              spacing={1}
            >
              <Typography variant="body1" fontWeight={500}>
                Price
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                textAlign={"center"}
              >
                {order.product.price}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "row", md: "column" }}
              alignItems="flex-start"
              spacing={1}
            >
              <Typography variant="body1" fontWeight={500}>
                Quantity
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {order.quantity}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "row", md: "column" }}
              alignItems="flex-start"
              spacing={1}
            >
              <Typography variant="body1" fontWeight={500}>
                Total
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {order.total}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "row", md: "column" }}
              alignItems="flex-start"
              spacing={1}
            >
              <Typography variant="body1" fontWeight={500}>
                Payment
              </Typography>
              <Typography
                color="primary"
                variant="body2"
                sx={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Pay Now
              </Typography>
            </Stack>

            {/* Order Status */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              component={Link}
              href=""
              sx={{
                textDecoration: "none",
                color: "primary.main",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                Order Status
              </Typography>
              <ArrowForwardIosOutlinedIcon fontSize="small" />
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}