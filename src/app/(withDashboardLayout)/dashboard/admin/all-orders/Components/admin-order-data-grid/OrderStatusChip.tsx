import { OrderStatus } from "@/types";
import { Chip } from "@mui/material";

interface OrderStatusChipProps {
  status: OrderStatus;
}

const statusColors: Record<
  OrderStatus,
  {
    label: string;
    color: "default" | "primary" | "warning" | "success" | "error" | "info";
  }
> = {
  [OrderStatus.PAID]: { label: "Paid", color: "primary" },
  [OrderStatus.PENDING]: { label: "Pending", color: "warning" },
  [OrderStatus.PROCESSING]: { label: "Processing", color: "info" },
  [OrderStatus.SHIPPED]: { label: "Shipped", color: "primary" },
  [OrderStatus.DELIVERED]: { label: "Delivered", color: "success" },
  [OrderStatus.CANCELED]: { label: "Canceled", color: "error" },
  [OrderStatus.RETURNED]: { label: "Returned", color: "error" },
};

const OrderStatusChip = ({ status }: OrderStatusChipProps) => {
  const { label, color } = statusColors[status] || {
    label: "Unknown",
    color: "default",
  };

  return (
    <Chip
      sx={{ display: "flex", justifySelf: "center", my: 1 }}
      label={label}
      color={color}
      variant="outlined"
    />
  );
};

export default OrderStatusChip;
