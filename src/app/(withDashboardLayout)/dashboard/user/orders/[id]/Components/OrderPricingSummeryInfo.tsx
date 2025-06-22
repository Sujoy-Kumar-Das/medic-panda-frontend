import calculateTotalSavings from "@/utils/calculateTotalSavings";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoiceDownloadButton from "./InvoiceDownloadButton";
import { OrderInfoRow } from "./OrderInfoRow";
import OrderInvoicePdf from "./OrderInvoicePdf";

export interface IOrderPricingSummaryInfoProps {
  orderDetails: {
    quantity: number | undefined;
    totalAmount: number | undefined;
    orderPrice: number | undefined;
    originalPrice: number | undefined;
    customerName: string | undefined;
    email: string | undefined;
    id: string | undefined;
    shippingAddress: string | undefined;
    orderDate: string | undefined;
    productName: string | undefined;
    status: string | undefined;
    image: string;
  };
}

export default function OrderPricingSummaryInfo({
  orderDetails,
}: IOrderPricingSummaryInfoProps) {
  const { quantity, totalAmount, orderPrice, originalPrice } = orderDetails;

  // calculate the saving
  const { hasSavings, savings, totalSavings } = calculateTotalSavings(
    Number(originalPrice),
    Number(orderPrice),
    Number(quantity)
  );

  return (
    <Card sx={{ flex: 1 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="text.primary" mb={2}>
          Pricing Summary
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <OrderInfoRow label="Products" value={quantity} />

          <OrderInfoRow
            label="Unit Price"
            value={`$${Number(orderPrice).toFixed(2)}`}
          />

          {hasSavings && (
            <OrderInfoRow
              label="Original Price"
              value={
                <Box component="span" sx={{ textDecoration: "line-through" }}>
                  ${Number(originalPrice).toFixed(2)}
                </Box>
              }
            />
          )}

          {hasSavings && (
            <OrderInfoRow
              label="You Saved"
              value={`$${savings.toFixed(2)}`}
              valueProps={{ color: "success.main" }}
            />
          )}

          {hasSavings && (
            <OrderInfoRow
              label="Total Savings"
              value={`$${totalSavings.toFixed(2)}`}
              valueProps={{ color: "success.main" }}
            />
          )}

          <Divider sx={{ my: 1 }} />

          <OrderInfoRow
            label="Total Amount"
            value={`$${Number(totalAmount).toFixed(2)}`}
            labelProps={{ fontWeight: "bold" }}
            valueProps={{ fontWeight: "bold" }}
          />
        </Box>

        <Box mt={3}>
          <PDFDownloadLink
            document={<OrderInvoicePdf orderDetails={orderDetails} />}
            fileName={`invoice_${orderDetails.id}.pdf`}
          >
            {
              (({ loading }: { loading: boolean }) => (
                <InvoiceDownloadButton loading={loading} />
              )) as unknown as React.ReactNode
            }
          </PDFDownloadLink>
        </Box>
      </CardContent>
    </Card>
  );
}
