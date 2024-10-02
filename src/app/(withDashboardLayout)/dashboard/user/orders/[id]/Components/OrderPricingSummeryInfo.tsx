// @ts-nocheck

import { IOrderDetails } from "@/types";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import OrderInvoicePdf from "./OrderInvoicePdf";

interface IOrderPricingSummaryInfoProps {
  orderDetails: IOrderDetails;
}

export default function OrderPricingSummaryInfo({
  orderDetails,
}: IOrderPricingSummaryInfoProps) {
  return (
    <Card sx={{ flex: 1 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          Pricing Summary
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Total Amount: ${Number(orderDetails.totalAmount).toFixed(2)}
        </Typography>

        <PDFDownloadLink
          document={<OrderInvoicePdf orderDetails={orderDetails} />}
          fileName={`invoice_${orderDetails?.id}.pdf`}
        >
          {({ blob, url, loading, error }) => {
            return (
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "16px" }}
                disabled={loading}
              >
                {loading ? "Generating Invoice..." : "Download Invoice"}
              </Button>
            );
          }}
        </PDFDownloadLink>
      </CardContent>
    </Card>
  );
}
