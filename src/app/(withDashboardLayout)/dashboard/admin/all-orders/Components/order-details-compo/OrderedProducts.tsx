import { IModifiedOrderData } from "@/types/IOrderDetails";
import { Avatar, Box, Stack, Typography } from "@mui/material";

export default function OrderedProducts({
  orderData,
}: {
  orderData: IModifiedOrderData;
}) {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Ordered Products
      </Typography>

      <Stack spacing={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 1,
            border: "1px solid #ddd",
            borderRadius: 1,
          }}
        >
          <Avatar
            src={orderData?.product?.thumbnail}
            alt={orderData?.product?.name}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <Typography variant="body2">
              <strong>{orderData?.product?.name}</strong>
            </Typography>
            <Typography variant="body2">
              <strong>Quantity:</strong> {orderData?.product?.quantity}
            </Typography>
            <Typography variant="body2">
              <strong>Price:</strong> {orderData?.product?.price}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
