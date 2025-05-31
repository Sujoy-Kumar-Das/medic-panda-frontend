import { IModifiedOrderData } from "@/types/IOrderDetails";
import { Typography } from "@mui/material";

export default function OrderInfo({
  orderData,
}: {
  orderData: IModifiedOrderData;
}) {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Order Details
      </Typography>
      <Typography variant="body2">
        <strong>Order ID:</strong> {orderData?.orderId ?? "N/A"}
      </Typography>
      <Typography variant="body2">
        <strong>Status:</strong> {orderData?.status ?? "N/A"}
      </Typography>
      <Typography variant="body2">
        <strong>Order Date:</strong> {orderData?.createdAt ?? "N/A"}
      </Typography>
      <Typography variant="body2">
        <strong>Shifting Address:</strong> {orderData?.shiftingAddress ?? "N/A"}
      </Typography>
    </>
  );
}
