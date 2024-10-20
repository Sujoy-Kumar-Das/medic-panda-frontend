import { useCancelOrderMutation } from "@/redux/api/order.api";
import { usePaymentNowMutation } from "@/redux/api/payment.api";
import { IGenericErrorResponse, IOrder } from "@/types";
import formatOrderDate from "@/utils/format.order.date";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function OrderCard({ order }: { order: IOrder }) {
  const { isPaid, quantity, product, total, createdAt, status, _id } = order;

  const [
    paymentNow,
    { isLoading: paymentLoader, isError, error, isSuccess, data: paymentData },
  ] = usePaymentNowMutation();

  const [
    cancelOrder,
    {
      isError: isCancelOrderError,
      isSuccess: isCancelOrderSuccess,
      error: cancelOrderError,
    },
  ] = useCancelOrderMutation();

  const router = useRouter();

  // handle payment handler
  const handlePaymentNow = async (id: string) => {
    await paymentNow(id);
  };

  // handle cancel order
  const handleCancelOrder = async (id: string) => {};

  // manage payment handler state;
  useEffect(() => {
    if (isCancelOrderSuccess) {
      toast.success("Order canceled successfully.");
    } else if (isCancelOrderError) {
      toast.error((cancelOrderError as IGenericErrorResponse).message);
    }
  }, [isCancelOrderSuccess, isCancelOrderError, cancelOrderError]);

  // manage payment handler state;
  useEffect(() => {
    if (isSuccess) {
      router.replace(paymentData.paymentUrl);
    } else if (isError) {
      toast.error((error as IGenericErrorResponse).message);
    }
  }, [paymentData, isSuccess, isError, error, router]);
  return (
    <Box
      py={5}
      px={3}
      borderRadius={2}
      boxShadow={2}
      textTransform={"capitalize"}
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
            Product Name
          </Typography>
          <Typography color="text.secondary" variant="body2" textAlign="center">
            {product?.name}
          </Typography>
        </Stack>

        {/** Placed On Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Placed On
          </Typography>
          <Typography color="text.secondary" variant="body2" textAlign="center">
            {formatOrderDate(createdAt)}
          </Typography>
        </Stack>

        {/** Price Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Price
          </Typography>
          <Typography color="text.secondary" variant="body2" textAlign="center">
            ${product.price.toFixed(2)}{" "}
          </Typography>
        </Stack>

        {/** Quantity Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Quantity
          </Typography>
          <Typography color="text.secondary" variant="body2" textAlign="center">
            {quantity}
          </Typography>
        </Stack>

        {/** Total Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Total
          </Typography>
          <Typography color="text.secondary" variant="body2" textAlign="center">
            ${total.toFixed(2)}
          </Typography>
        </Stack>

        {/** Payment Status Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Payment Status
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
            {isPaid ? (
              "Paid"
            ) : (
              <Typography
                sx={{
                  fontWeight: 400,
                }}
                onClick={() => handlePaymentNow(_id)}
              >
                Pay Now
              </Typography>
            )}
          </Typography>
        </Stack>

        {/** Order Status Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Order Status
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
            {status}
          </Typography>
        </Stack>

        {/** Cancel Order Section */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" fontWeight={600} textAlign="center">
            Cancel Order
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
            Cancel
          </Typography>
        </Stack>

        {/** View Order Link */}
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
