import { OrderStatus } from "@/types";
import { Card, CardContent, Chip, Divider, Typography } from "@mui/material";

interface IOrderCustomerInfoProps {
  customerName: string;
  orderDate: string;
  shippingAddress: string;
  status: OrderStatus;
}

export default function OrderCustomerInfo({
  customerName,
  orderDate,
  shippingAddress,
  status,
}: IOrderCustomerInfoProps) {
  return (
    <Card sx={{ flex: 1 }}>
      {" "}
      {/* Ensure card takes available space */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          Customer Information
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Name: {customerName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Order Date: {orderDate}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Shipping Address: {shippingAddress}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" color="text.secondary">
          Status:{" "}
          <Chip
            label={status}
            color={
              status === OrderStatus.DELIVERED
                ? "success"
                : status === OrderStatus.CANCELED ||
                  status === OrderStatus.RETURNED
                ? "error"
                : "warning"
            }
            size="small"
            sx={{ color: "white" }}
          />
        </Typography>
      </CardContent>
    </Card>
  );
}
