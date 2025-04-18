import useModifiedUserOrderDetails from "@/hooks/useModifiedUserOrderDetails";
import { Box, Grid, Typography } from "@mui/material";
import OrderCustomerInfo from "./OrderCustomerInfo";
import OrderPricingSummeryInfo from "./OrderPricingSummeryInfo";
import OrderProductInfo from "./OrderProductInfo";
import OrderStatusSteps from "./OrderStatusSteps";

// order details components
function UserOrderDetailsCompo({ data }: { data: any }) {
  // const activeStep = getStatusStep(status);

  const { modifiedOrderData } = useModifiedUserOrderDetails({
    orderDetails: data,
  });

  return (
    <>
      {modifiedOrderData && (
        <Box sx={{ padding: 3, maxWidth: 1200, margin: "0 auto" }}>
          {/* Header Section */}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 3, color: "text.primary" }}
          >
            {/* Order Details (#{id}) */}
          </Typography>

          {/* Order Overview */}
          <Grid container spacing={3}>
            {/* Status Tracker */}
            <Grid item xs={12}>
              <OrderStatusSteps
                status={modifiedOrderData.orderInfo.status as string}
              />
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
                  customerInfo={{
                    status: String(modifiedOrderData?.orderInfo.status || ""),
                    name: modifiedOrderData?.userInfo?.name || "",
                    email: modifiedOrderData?.userInfo?.email || "",
                    contact: modifiedOrderData?.userInfo?.contact || "",
                    address: modifiedOrderData?.userInfo?.address || "",
                    orderDate: modifiedOrderData?.orderInfo.orderDate || "",
                  }}
                />
              </Grid>

              {/* Pricing Summary */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <OrderPricingSummeryInfo
                  orderDetails={{
                    id: modifiedOrderData.orderInfo.orderId,
                    orderPrice: Number(
                      modifiedOrderData?.productInfo.orderPrice
                    ),
                    originalPrice: Number(
                      modifiedOrderData?.productInfo.originalPrice
                    ),
                    quantity: Number(modifiedOrderData?.productInfo.quantity),
                    totalAmount: Number(
                      modifiedOrderData?.orderInfo.totalAmount
                    ),
                    customerName: String(modifiedOrderData.userInfo.name),
                    email: String(modifiedOrderData.userInfo.email),
                    orderDate: modifiedOrderData.orderInfo.orderDate,
                    productName: modifiedOrderData.productInfo.name,
                    shippingAddress: String(
                      modifiedOrderData.orderInfo.shippingInfo.address
                    ),
                    status: modifiedOrderData.orderInfo.status,
                    image: modifiedOrderData.productInfo.image,
                  }}
                />
              </Grid>
            </Grid>

            {/* Product List */}
            <OrderProductInfo
              name={String(modifiedOrderData.productInfo.name)}
              quantity={Number(modifiedOrderData.productInfo.quantity)}
              price={Number(modifiedOrderData.productInfo.originalPrice)}
              orderPrice={Number(modifiedOrderData.productInfo.orderPrice)}
              imageUrl={modifiedOrderData.productInfo.image}
            />
          </Grid>
        </Box>
      )}
    </>
  );
}

export default UserOrderDetailsCompo;
