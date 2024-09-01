"use client";
import { addProduct } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function ProductButton({ product }) {
  const dispatch = useAppDispatch();
  const handleAddProduct = (productData) => {
    const { name, thumbnail, _id, price } = productData;
    dispatch(
      addProduct({
        name,
        thumbnail,
        id: _id,
        price,
      })
    );
  };
  return (
    <Button
      color="primary"
      endIcon={<ShoppingCart />}
      sx={{
        fontWeight: "bold",
        textTransform: "uppercase",
        borderRadius: 2,
        p: 1,
      }}
      size={"small"}
      onClick={() => handleAddProduct(product)}
    >
      Add to cart
    </Button>
  );
}
