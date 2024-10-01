import { Button, Card, CardContent, Typography } from "@mui/material";

interface IOrderPricingSummaryInfoProps {
  totalAmount: number;
}

export default function OrderPricingSummeryInfo({
  totalAmount,
}: IOrderPricingSummaryInfoProps) {
  return (
    <Card sx={{ flex: 1 }}>
      {" "}
      {/* Ensure card takes available space */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          Pricing Summary
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Total Amount: ${totalAmount.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Print Invoice
        </Button>
      </CardContent>
    </Card>
  );
}
