"use client";
import useAddToCart from "@/hooks/useAddToCart";
import { IProduct } from "@/types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, IconButton, SxProps, Tooltip } from "@mui/material";
import { ReactNode } from "react";
import AnimateLoadingButton from "./AnimateLoadingButton";

interface IAddToCartButtonProps {
  product: IProduct;
  basic?: boolean;
  sx?: SxProps;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconBtn?: boolean;
  quantity?: number;
}

export default function AddToCartButton({
  product,
  quantity = 1,
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
          onClick={() => handlerFunc({ ...product, quantity })}
          disabled={isLoading}
        >
          <AnimateLoadingButton isLoading={isLoading}>
            <ShoppingCartIcon />
          </AnimateLoadingButton>
        </IconButton>
      ) : (
        <AnimateLoadingButton
          isLoading={isLoading}
          loadingScalePattern={[1, 1.1, 1]}
        >
          <Button
            sx={{
              ...sx,
            }}
            onClick={() => handlerFunc({ ...product })}
            disabled={isLoading}
            endIcon={endIcon}
            startIcon={startIcon}
          >
            {children ? children : <ShoppingCartIcon />}
          </Button>
        </AnimateLoadingButton>
      )}
    </Tooltip>
  );
}
