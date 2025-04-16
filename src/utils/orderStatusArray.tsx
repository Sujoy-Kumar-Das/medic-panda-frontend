import { OrderStatus } from "@/types";
import {
  Cancel as CanceledIcon,
  CheckCircle as DeliveredIcon,
  Payment as PaidIcon,
  HourglassEmpty as PendingIcon,
  Settings as ProcessingIcon,
  Replay as ReturnedIcon,
  LocalShipping as ShippedIcon,
} from "@mui/icons-material";
import randomUID from "./randomId";

const orderStatusArray = [
  {
    id: randomUID(),
    status: OrderStatus.PENDING,
    label: "Pending",
    icon: <PendingIcon />,
    color: "#F59E0B", // Amber-500
    message: "Waiting for payment confirmation",
    isActive: false,
  },
  {
    id: randomUID(),
    status: OrderStatus.PAID,
    label: "Paid",
    icon: <PaidIcon />,
    color: "#10B981", // Emerald-500
    message: "Payment received, preparing order",
    isActive: false,
  },
  {
    id: randomUID(),
    status: OrderStatus.PROCESSING,
    label: "Processing",
    icon: <ProcessingIcon />,
    color: "#3B82F6", // Blue-500
    message: "Your order is being processed",
    isActive: false,
  },
  {
    id: randomUID(),
    status: OrderStatus.SHIPPED,
    label: "Shipped",
    icon: <ShippedIcon />,
    color: "#8B5CF6", // Violet-500
    message: "Order shipped! Tracking available soon",
    isActive: false,
  },
  {
    id: randomUID(),
    status: OrderStatus.DELIVERED,
    label: "Delivered",
    icon: <DeliveredIcon />,
    color: "#EC4899", // Pink-500
    message: "Delivered successfully! Enjoy your purchase",
    isActive: false,
  },
  {
    id: randomUID(),
    status: OrderStatus.CANCELED,
    label: "Canceled",
    icon: <CanceledIcon />,
    color: "#EF4444", // Red-500
    message: "Order was canceled",
    isActive: false,
  },
  {
    id: randomUID(),
    status: OrderStatus.RETURNED,
    label: "Returned",
    icon: <ReturnedIcon />,
    color: "#6B7280", // Gray-500
    message: "Return initiated. Refund in progress",
    isActive: false,
  },
];

export default orderStatusArray;
