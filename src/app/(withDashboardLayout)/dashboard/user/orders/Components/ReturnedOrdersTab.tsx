"use client";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetAllOrderQuery } from "@/redux/api/order.api";
import formatOrderDate from "@/utils/format.order.date";
import { Box, Stack, Typography } from "@mui/material";

export default function ReturnedOrdersTab() {
  const { data, isLoading } = useGetAllOrderQuery({ status: "returned" });

  if (isLoading) {
    return <Loader />;
  }

  if (!data?.data?.length) {
    return (
      <NoDataFound
        link="/product"
        text="Browse Products"
        message="No returned orders found at the moment."
      />
    );
  }

  return (
    <Stack spacing={3}>
      {data?.data?.map((order) => (
        <Box
          key={order._id}
          p={3}
          borderRadius={2}
          sx={{
            width: "100%",
            backgroundColor: "background.paper",
            transition: "background-color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              backgroundColor: "background.default",
              transform: "scale(1.02)",
            },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={3}
          >
            <Stack direction="column" spacing={1.5} alignItems="center">
              <Typography variant="body1" fontWeight={600}>
                Name
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {order?.product?.name}
              </Typography>
            </Stack>

            <Stack direction="column" spacing={1.5} alignItems="center">
              <Typography variant="body1" fontWeight={600}>
                Placed On
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {formatOrderDate(order.createdAt)}
              </Typography>
            </Stack>

            <Stack direction="column" spacing={1.5} alignItems="center">
              <Typography variant="body1" fontWeight={600}>
                Returned On
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {formatOrderDate(order.createdAt)}
              </Typography>
            </Stack>

            <Stack direction="column" spacing={1.5} alignItems="center">
              <Typography variant="body1" fontWeight={600}>
                Price
              </Typography>
              <Typography color="text.secondary" variant="body2">
                ${(Number(order.total) / Number(order.quantity)).toFixed(2)}
              </Typography>
            </Stack>

            <Stack direction="column" spacing={1.5} alignItems="center">
              <Typography variant="body1" fontWeight={600}>
                Quantity
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {order.quantity}
              </Typography>
            </Stack>

            <Stack direction="column" spacing={1.5} alignItems="center">
              <Typography variant="body1" fontWeight={600}>
                Total
              </Typography>
              <Typography color="text.secondary" variant="body2">
                ${order.total.toFixed(2)}
              </Typography>
            </Stack>

            <Stack direction="column" spacing={1.5} alignItems="center">
              <Typography variant="body1" fontWeight={600}>
                Refund
              </Typography>
              <Typography color="text.secondary" variant="body2">
                ${order.total.toFixed(2)}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
