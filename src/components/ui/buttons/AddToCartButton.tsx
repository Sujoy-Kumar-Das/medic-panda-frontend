"use client";
import useAddToCart from "@/hooks/useAddToCart";
import { IProduct } from "@/types";
import { Button, SxProps, Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface IAddToCartButtonProps {
  children: ReactNode;
  product: IProduct;
  sx?: SxProps;
}

export default function AddToCartButton({
  children,
  product,
  sx,
}: IAddToCartButtonProps) {
  const { handlerFunc, isLoading } = useAddToCart();

  return (
    <Tooltip title="Add To Cart">
      <Button
        onClick={() => handlerFunc(product)}
        fullWidth
        variant="contained"
        color="primary"
        sx={sx}
      >
        {isLoading ? "Adding To Cart..." : children ? children : "Add To Cart"}
      </Button>
    </Tooltip>
  );
}
