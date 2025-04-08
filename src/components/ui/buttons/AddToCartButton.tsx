"use client";
import useAddToCart from "@/hooks/useAddToCart";
import { IProduct } from "@/types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Button,
  CircularProgress,
  IconButton,
  SxProps,
  Tooltip,
} from "@mui/material";
import { ReactNode } from "react";

interface IAddToCartButtonProps {
  product: IProduct;
  basic?: boolean;
  sx?: SxProps;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconBtn?: boolean;
}

export default function AddToCartButton({
  product,
  children,
  sx,
  startIcon,
  endIcon,
  iconBtn = false,
}: IAddToCartButtonProps) {
  const { handlerFunc, isLoading } = useAddToCart();

  return (
    <Tooltip title="Add To Cart">
      {iconBtn ? (
        <IconButton
          sx={{
            ...sx,
          }}
          onClick={() => handlerFunc(product)}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : <ShoppingCartIcon />}
        </IconButton>
      ) : (
        <Button
          sx={{
            ...sx,
          }}
          onClick={() => handlerFunc(product)}
          disabled={isLoading}
          endIcon={endIcon}
          startIcon={startIcon}
        >
          {isLoading ? (
            <CircularProgress size={24} />
          ) : children ? (
            children
          ) : (
            <ShoppingCartIcon />
          )}
        </Button>
      )}
    </Tooltip>
  );
}
