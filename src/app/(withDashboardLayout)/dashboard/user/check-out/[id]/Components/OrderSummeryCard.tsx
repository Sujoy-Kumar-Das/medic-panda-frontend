"use client";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
export default function OrderSummeryCard({ orderItem }) {
  return (
    <Card
      sx={{
        p: 3,
        mb: 4,
        boxShadow: 0,
        backgroundColor: "background.default",
      }}
    >
      <CardHeader
        avatar={<ShoppingCartIcon color="secondary" />}
        title={`Order Summary For ${orderItem?.product?.name}`}
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
          color: "secondary",
        }}
      />
      <CardContent>
        <Typography
          variant="body1"
          sx={{ fontWeight: 500 }}
          color={"secondary"}
        >
          Quantity:{" "}
          {`${orderItem?.quantity} pice${orderItem?.quantity > 1 ? "'s" : ""}`}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 500 }}
          color={"secondary"}
        >
          Price: ${Number(orderItem?.product?.price).toFixed(2)}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
          color={"secondary"}
        >
          Total: ${Number(orderItem?.totalPrice).toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
}
