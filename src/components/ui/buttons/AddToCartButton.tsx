"use client";
import useUserInfo from "@/hooks/useUserInfo";
import { addProduct } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { IGenericErrorResponse, IProduct } from "@/types";
import { ShoppingCart } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, CircularProgress, IconButton, SxProps } from "@mui/material";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAddToCartMutation } from "../../../redux/api/addToCart.api";

interface IAddToCartButtonProps {
  product: IProduct;
  basic?: boolean;
  sx?: SxProps;
  className?: string;
  icon?: boolean;
}

export default function AddToCartButton({
  product,
  basic = false,
  sx,
  className,
  icon = true,
}: IAddToCartButtonProps) {
  const user = useUserInfo();
  const [addToCartInDB, { isLoading, isSuccess, isError, error }] =
    useAddToCartMutation();
  const dispatch = useAppDispatch();

  const handleAddToCart = async (productData: IProduct) => {
    const { name, thumbnail, _id, price } = productData;
    const userId = user?.userId;

    if (!userId) {
      // Local cart handling
      dispatch(addProduct({ name, thumbnail, id: _id, price }));
      toast.success("Product added to cart locally.");
      return;
    }

    try {
      await addToCartInDB({ product: _id, quantity: 1 }).unwrap();
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added to cart.");
    } else if (isError) {
      const errorMessage = (error as IGenericErrorResponse).message;
      toast.error(errorMessage || "Failed to add product to cart.");
    }
  }, [isSuccess, isError, error]);

  const commonButtonProps = {
    onClick: () => handleAddToCart(product),
    disabled: isLoading,
    "aria-label": `Add ${product.name} to cart`,
  };

  return (
    <>
      {basic ? (
        <Button
          {...commonButtonProps}
          className={className}
          color="primary"
          endIcon={
            isLoading ? (
              <CircularProgress size={16} sx={{ color: "white" }} />
            ) : icon ? (
              <ShoppingCart />
            ) : (
              ""
            )
          }
          size="small"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            borderRadius: 2,
            p: 1,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
            ...sx, // Ensure sx is passed correctly here
          }}
        >
          {isLoading ? "Adding..." : "Add to cart"}
        </Button>
      ) : (
        <IconButton
          {...commonButtonProps}
          className={className}
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
            ...sx, // Ensure sx is passed correctly here
          }}
        >
          {isLoading ? <CircularProgress size={24} /> : <ShoppingCartIcon />}
        </IconButton>
      )}
    </>
  );
}
