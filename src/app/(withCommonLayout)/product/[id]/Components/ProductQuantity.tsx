"use client";

import AddToCartButton from "@/components/ui/buttons/AddToCartButton";
import { IProduct } from "@/types";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Stack } from "@mui/material";
export default function ProductQuantity({ product }: { product: IProduct }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2} mt={1}>
      <AddToCartButton product={product} iconBtn={false}>
        Checkout <ShoppingCartCheckoutIcon />
      </AddToCartButton>
    </Stack>
  );
}
