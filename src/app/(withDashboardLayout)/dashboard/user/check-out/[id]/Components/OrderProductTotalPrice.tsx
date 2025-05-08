import { Typography } from "@mui/material";

interface OrderProductTotalPriceProps {
  price: number;
  discountPrice: number;
  quantity: number;
}

export default function OrderProductTotalPrice({
  price,
  discountPrice,
  quantity,
}: OrderProductTotalPriceProps) {
  const totalPrice = Number(discountPrice || price || 0) * quantity;
  return (
    <Typography variant="h6" sx={{ fontWeight: "bold" }} color={"secondary"}>
      Total: ${totalPrice.toFixed(2)}
    </Typography>
  );
}
