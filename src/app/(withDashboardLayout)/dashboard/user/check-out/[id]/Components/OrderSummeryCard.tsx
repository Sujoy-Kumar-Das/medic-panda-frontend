"use client";
import useUpdateFieldQuantityValue from "@/hooks/useUpdateFieldQuantityValue";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import OrderItemPerUnitPrice from "./OrderItemPerUnitPrice";
import OrderProductTotalPrice from "./OrderProductTotalPrice";
import OrderQuantity from "./OrderQuantity";

export default function OrderSummeryCard({ orderItem }: { orderItem: any }) {
  const { value, handleDecrease, handleIncrease, handleChange } =
    useUpdateFieldQuantityValue({ fieldName: "quantity" });

  const discountPrice = orderItem?.product?.discount?.discountPrice;
  const price = orderItem?.product?.price;

  return (
    <Card
      sx={{ p: 3, mb: 4, boxShadow: 0, backgroundColor: "background.default" }}
    >
      <CardHeader
        avatar={<ShoppingCartIcon color="secondary" />}
        title={`Order Summary For ${orderItem?.product?.name}`}
        titleTypographyProps={{
          variant: "h6",
          fontWeight: "bold",
          color: "secondary",
        }}
      />
      <CardContent>
        {/* order quantity input field */}
        <OrderQuantity
          onChange={handleChange}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={value}
        />

        {/* order product per unit price */}
        <OrderItemPerUnitPrice price={price} discountPrice={discountPrice} />
        <Divider sx={{ my: 2 }} />

        {/* total price  */}
        <OrderProductTotalPrice
          price={price}
          discountPrice={discountPrice}
          quantity={value}
        />
      </CardContent>
    </Card>
  );
}
