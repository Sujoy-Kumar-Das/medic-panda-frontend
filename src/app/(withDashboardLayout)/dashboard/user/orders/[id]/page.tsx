"use client";
import ErrorPage from "@/components/shared/error/Error";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetSingleOrderQuery } from "@/redux/api/order.api";
import { IGenericErrorResponse, IOrderDetails, OrderStatus } from "@/types";
import formatOrderDate from "@/utils/format.order.date";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import OrderCustomerInfo from "./Components/OrderCustomerInfo";
import OrderPricingSummeryInfo from "./Components/OrderPricingSummeryInfo";
import OrderProductInfo from "./Components/OrderProductInfo";
import OrderStatusSteps from "./Components/OrderStatusSteps";

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [orderDetails, setOrderDetails] = useState<IOrderDetails | null>(null);

  // Redux hook for fetching single order data
  const { data, isLoading, error } = useGetSingleOrderQuery(params.id);

  // Modify the data and set to the state
  useEffect(() => {
    if (data) {
      const orderDetailsData: IOrderDetails = {
        id: data.order?._id,
        customerName: data.userInfo?.name,
        status: data.order?.status,
        shippingAddress: `${data.order?.shippingAddress?.street}, ${data.order?.shippingAddress?.postalCode}, ${data.order?.shippingAddress?.city}, ${data.order?.shippingAddress?.country}`,
        totalAmount: Number(data.order?.total),
        orderDate: formatOrderDate(data.order?.createdAt),
        product: {
          name: data.order?.product?.name,
          quantity: data.order?.quantity,
          price: Number(data.order?.total) / Number(data.order?.quantity),
        },
      };
      setOrderDetails(orderDetailsData);
    }
  }, [params.id, data]);

  if (isLoading || !orderDetails) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error={error as IGenericErrorResponse} />;
  }

  if (!data) {
    return (
      <NoDataFound
        link="/ship"
        text="Shop"
        message="You don't have any order now."
      />
    );
  }

  const { customerName, status, shippingAddress, orderDate, product } =
    orderDetails;

  // Get active step based on the order status
  const getStatusStep = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PENDING:
        return 0;
      case OrderStatus.PAID:
        return 1;
      case OrderStatus.PROCESSING:
        return 2;
      case OrderStatus.SHIPPED:
        return 3;
      case OrderStatus.DELIVERED:
        return 4;
      case OrderStatus.CANCELED:
        return 5;
      case OrderStatus.RETURNED:
        return 6;
      default:
        return -1;
    }
  };

  const activeStep = getStatusStep(status);

  return (
    <Box sx={{ padding: 3, maxWidth: 1200, margin: "0 auto" }}>
      {/* Header Section */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, color: "text.primary" }}
      >
        Order Details (#{params.id})
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
