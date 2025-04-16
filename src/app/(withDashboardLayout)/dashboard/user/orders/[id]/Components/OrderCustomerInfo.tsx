import { IModifiedUserInfo, OrderStatus } from "@/types";
import getStatusColor from "@/utils/getStatusColor";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { OrderInfoRow } from "./OrderInfoRow";

interface IOrderCustomerInfoProps {
  customerInfo: {
    status: string;
    orderDate: string;
  } & IModifiedUserInfo;
}

export default function OrderCustomerInfo({
  customerInfo: { name, email, contact, address, status, orderDate },
}: IOrderCustomerInfoProps) {
  return (
    <Card sx={{ flex: 1 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="text.primary" mb={2}>
          Customer Information
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <OrderInfoRow label="Name" value={name || "N/A"} />
          <OrderInfoRow label="Email" value={email || "N/A"} />
          <OrderInfoRow label="Contact" value={contact || "N/A"} />
          <OrderInfoRow label="Order Date" value={orderDate || "N/A"} />
          <OrderInfoRow
            label="Shipping Address"
            value={address || "N/A"}
            valueProps={{ textAlign: "right" }}
          />

          <Divider sx={{ my: 1.5 }} />

          <OrderInfoRow
            label="Status"
            value={
              <Chip
                label={status}
                color={getStatusColor(status as OrderStatus)}
                size="small"
                sx={{
                  color: "white",
                  fontWeight: 500,
                  minWidth: 80,
                  justifyContent: "center",
                }}
              />
            }
          />
        </Box>
      </CardContent>
    </Card>
  );
}
