import { IModifiedOrderData } from "@/types/IOrderDetails";
import { Typography } from "@mui/material";

export default function PaymentInfo({
  orderData,
}: {
  orderData: IModifiedOrderData;
}) {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Payment Info
      </Typography>
      <Typography variant="body2">
        <strong>Method:</strong> {orderData?.payment?.method ?? "N/A"}
      </Typography>
      <Typography variant="body2">
        <strong>Transaction ID:</strong>{" "}
        {orderData?.payment?.transactionId ?? "N/A"}
      </Typography>
      <Typography variant="body2">
        <strong>Amount:</strong> {orderData?.payment?.amount ?? "N/A"}
      </Typography>
      <Typography variant="body2">
        <strong>Status:</strong> {orderData?.payment?.status ?? "N/A"}
      </Typography>
    </>
  );
}
