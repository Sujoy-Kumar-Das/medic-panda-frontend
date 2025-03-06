import { IModifiedOrderData } from "@/types/IOrderDetails";
import { Box, Divider } from "@mui/material";
import OrderedProducts from "./OrderedProducts";
import OrderInfo from "./OrderInfo";
import PaymentInfo from "./PaymentInfo";
import UserInfo from "./UserInfo";

export default function OrderDetailsCompo({
  orderData,
}: {
  orderData: IModifiedOrderData;
}) {
  return (
    <Box
      sx={{
        p: 3,
        width: "100%",
        maxWidth: 500,
        borderRadius: 2,
        mx: "auto",
        border: "1px solid #ddd",
      }}
    >
      <OrderInfo orderData={orderData} />
      <Divider sx={{ my: 2 }} />
      <PaymentInfo orderData={orderData} />
      <Divider sx={{ my: 2 }} />
      <UserInfo orderData={orderData} />
      <Divider sx={{ my: 2 }} />
      <OrderedProducts orderData={orderData} />
    </Box>
  );
}
