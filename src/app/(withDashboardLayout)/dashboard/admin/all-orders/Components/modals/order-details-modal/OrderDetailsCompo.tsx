import { IModifiedOrderData } from "@/types/IOrderDetails";
import transformObjectToArrayOfObject from "@/utils/transformObjectToArrayOfObject";
import { Box, Divider } from "@mui/material";
import OrderInfo from "../../OrderInfo";

export default function OrderDetailsCompo({
  orderData,
}: {
  orderData: IModifiedOrderData;
}) {
  // console.log(orderData);

  const orderDetails = [
    { id: crypto.randomUUID(), title: "Order ID", value: orderData.orderId },
    { id: crypto.randomUUID(), title: "Order Status", value: orderData.status },
    {
      id: crypto.randomUUID(),
      title: "Order Date",
      value: orderData.createdAt,
    },
    {
      id: crypto.randomUUID(),
      title: "Shifting Address",
      value: orderData.shiftingAddress,
    },
  ];

  console.log(transformObjectToArrayOfObject(orderData.payment));
  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
      }}
    >
      <OrderInfo title="Order Info" items={orderDetails} />
      <Divider sx={{ my: 2 }} />
      <OrderInfo
        title="Payment Information"
        items={transformObjectToArrayOfObject(orderData.payment)}
      />
      <Divider sx={{ my: 2 }} />
      <OrderInfo
        title="User Information"
        items={transformObjectToArrayOfObject(orderData.user)}
      />
      <Divider sx={{ my: 2 }} />
      <OrderInfo
        title="Product Information"
        items={transformObjectToArrayOfObject(orderData.product)}
      />
    </Box>
  );
}
