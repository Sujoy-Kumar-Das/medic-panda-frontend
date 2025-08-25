"use client";
import useAddToCart from "@/hooks/useAddToCart";
import { IProduct } from "@/types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, CircularProgress, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface IAddToCartButtonProps {
  children?: ReactNode;
  product: IProduct;
  sx?: SxProps;
  icon?: boolean;
}

export default function AddToCartButton({
  children,
  product,
  icon = true,
  sx,
}: IAddToCartButtonProps) {
  const { handlerFunc, isLoading } = useAddToCart();

  return (
    <Button
      size="small"
      onClick={() => handlerFunc(product)}
      startIcon={
        isLoading ? (
          <CircularProgress size={16} color="inherit" />
        ) : icon ? (
          <ShoppingCartIcon fontSize="small" />
        ) : null
      }
      disabled={isLoading}
      sx={{
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        textTransform: "none",
        px: 2,
        py: 0.5,
        "&:hover": { backgroundColor: "primary.dark" },
        ...sx,
      }}
    >
      {isLoading ? "Adding..." : children || "Add to Cart"}
    </Button>
  );
}
