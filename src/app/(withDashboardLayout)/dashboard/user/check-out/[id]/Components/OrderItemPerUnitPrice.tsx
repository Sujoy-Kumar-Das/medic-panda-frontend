import { Typography } from "@mui/material";

interface OrderItemPerUnitPriceProps {
  price: number;
  discountPrice: number;
}

export default function OrderItemPerUnitPrice({
  price,
  discountPrice,
}: OrderItemPerUnitPriceProps) {
  return (
    <Typography
      variant="body1"
      sx={{ fontWeight: 500, gap: 1, display: "flex" }}
      color={"secondary"}
    >
      Price:{" "}
      <span
        style={{
          textDecoration: `${discountPrice && "line-through"}`,
        }}
      >
        {Number(price).toFixed(2)}
      </span>
      {""}
      <span>${Number(discountPrice || 0).toFixed(2)}</span>
    </Typography>
  );
}
