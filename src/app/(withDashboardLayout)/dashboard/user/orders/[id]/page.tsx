"use client";
import ErrorPage from "@/components/shared/error/Error";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetSingleOrderQuery } from "@/redux/api/order.api";
import { IGenericErrorResponse } from "@/types";
import formatOrderDate from "@/utils/format.order.date";
import {
  Cancel as CanceledIcon,
  CheckCircle as DeliveredIcon,
  HourglassEmpty as PendingIcon,
  Build as ProcessingIcon,
  Undo as ReturnedIcon,
  LocalShipping as ShippedIcon,
  Check as SuccessIcon,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import OrderCustomerInfo from "./Components/OrderCustomerInfo";
import OrderPricingSummeryInfo from "./Components/OrderPricingSummeryInfo";
import OrderProductInfo from "./Components/OrderProductInfo";

// OrderStatus enum
enum OrderStatus {
  PAID = "paid",
  PENDING = "pending",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELED = "canceled",
  RETURNED = "returned",
}

// Dummy order status for testing
const dummyOrderStatus = OrderStatus.PROCESSING;

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [orderDetails, setOrderDetails] = useState<any>(null);

  //   redux hook for fetch single order data;
  const { data, isLoading, error } = useGetSingleOrderQuery(params.id);

  //   modify the data and set to the state;
  useEffect(() => {
    const orderDetailsData = {
      id: data?.order?._id,
      customerName: data?.userInfo?.name,
      status: data?.order?.status,
      shippingAddress: `${data?.order?.shippingAddress?.street}, ${data?.order?.shippingAddress?.postalCode}, ${data?.order?.shippingAddress?.city}, ${data?.order?.shippingAddress?.country}`,
      totalAmount: Number(data?.order?.total),
      orderDate: formatOrderDate(data?.order?.createdAt),
      product: {
        name: data?.order?.product?.name,
        quantity: data?.order?.quantity,
        price: Number(data?.order?.total) / Number(data?.order?.quantity),
      },
    };
    setOrderDetails(orderDetailsData);
  }, [params.id, data]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage error={error as IGenericErrorResponse} />;
  }

  if (!orderDetails || !data) {
    return (
      <NoDataFound
        link="/ship"
        text="Shop"
        message="You don't have any order now."
      />
    );
  }

  const {
    customerName,
    status,
    shippingAddress,
    totalAmount,
    orderDate,
    product,
  } = orderDetails;

  // Stepper data for tracking the order status
  const steps = [
    { label: "Pending", icon: <PendingIcon />, status: OrderStatus.PENDING },
    {
      label: "Processing",
      icon: <ProcessingIcon />,
      status: OrderStatus.PROCESSING,
    },
    { label: "Shipped", icon: <ShippedIcon />, status: OrderStatus.SHIPPED },
    {
      label: "Delivered",
      icon: <DeliveredIcon />,
      status: OrderStatus.DELIVERED,
    },
  ];

  // Get active step based on the order status
  const getStatusStep = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PENDING:
        return 0;
      case OrderStatus.PROCESSING:
        return 1;
      case OrderStatus.SHIPPED:
        return 2;
      case OrderStatus.DELIVERED:
        return 3;
      case OrderStatus.CANCELED:
      case OrderStatus.RETURNED:
      default:
        return -1; // Statuses like canceled or returned won't show on the main progress bar
    }
  };

  const activeStep = getStatusStep(status);

  // Render step icon conditionally based on whether the step is complete
  const StepIcon = ({ stepIndex }: { stepIndex: number }) => {
    if (stepIndex <= activeStep) {
      return <SuccessIcon color="success" />;
    } else {
      return steps[stepIndex].icon;
    }
  };

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

      {/* Status Tracker */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            Order Status
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  StepIconComponent={() => <StepIcon stepIndex={index} />}
                >
                  <Typography color="text.primary">{step.label}</Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {status === OrderStatus.CANCELED && (
            <Chip
              label="Order Canceled"
              color="error"
              icon={<CanceledIcon />}
              sx={{ mt: 2, color: "white" }}
            />
          )}
          {status === OrderStatus.RETURNED && (
            <Chip
              label="Order Returned"
              color="warning"
              icon={<ReturnedIcon />}
              sx={{ mt: 2, color: "white" }}
            />
          )}
        </CardContent>
      </Card>

      {/* Order Overview */}
      <Grid container spacing={3}>
        <Grid item container spacing={3}>
          {/* Customer & Order Info */}
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <OrderCustomerInfo
              customerName={customerName}
              orderDate={orderDate}
              shippingAddress={shippingAddress}
              status={status}
            />
          </Grid>
          {/* Pricing Summary */}
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <OrderPricingSummeryInfo totalAmount={totalAmount} />
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
