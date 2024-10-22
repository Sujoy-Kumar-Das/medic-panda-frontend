"use client";
import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import { IOrderDetails } from "@/types";
import getStatusStep from "@/utils/getStatusStep";
import { Box, Grid, Typography } from "@mui/material";
import OrderCustomerInfo from "./OrderCustomerInfo";
import OrderPricingSummeryInfo from "./OrderPricingSummeryInfo";
import OrderProductInfo from "./OrderProductInfo";
import OrderStatusSteps from "./OrderStatusSteps";

interface IOrderDetailsCompo {
  id: string;
  orderDetails: IOrderDetails;
}

// order details components
function OrderDetailsCompo({
  data: { id, orderDetails },
}: {
  data: IOrderDetailsCompo;
}) {
  const { customerName, status, shippingAddress, orderDate, product } =
    orderDetails;
  const activeStep = getStatusStep(status);

  return (
    <Box sx={{ padding: 3, maxWidth: 1200, margin: "0 auto" }}>
      {/* Header Section */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, color: "text.primary" }}
      >
        Order Details (#{id})
      </Typography>

      {/* Order Overview */}
      <Grid container spacing={3}>
        {/* Status Tracker */}
        <Grid item xs={12}>
          <OrderStatusSteps status={status} currentStep={activeStep} />
        </Grid>

        {/* Customer & Pricing Info - Flexbox Implementation */}
        <Grid
          item
          container
          spacing={3}
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          {/* Customer Info */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <OrderCustomerInfo
              customerName={customerName}
              orderDate={orderDate}
              shippingAddress={shippingAddress}
              status={status}
            />
          </Grid>

          {/* Pricing Summary */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <OrderPricingSummeryInfo orderDetails={orderDetails} />
          </Grid>
        </Grid>

        {/* Product List */}
        <OrderProductInfo
          name={product?.name}
          quantity={product?.quantity}
          price={Number(product?.price)}
        />
      </Grid>
    </Box>
  );
}

// OrderDetailsWithHOC
const OrderDetailsWithHOC = HandleLoadingErrorAndNoData(OrderDetailsCompo);

export default OrderDetailsWithHOC;
