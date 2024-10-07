"use client";
import { addProduct } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { IGenericErrorResponse, IProduct } from "@/types";
import { IUserInfo } from "@/types/user.type";
import { ShoppingCart } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAddToCartMutation } from "../../../redux/api/addToCart.api";

export default function AddToCartButton({
  product,
  user,
}: {
  product: IProduct;
  user: IUserInfo;
}) {
  const [addToCartInDB, { isLoading, isSuccess, isError, error }] =
    useAddToCartMutation();

  const dispatch = useAppDispatch();

  const handleAddToCart = async (productData: IProduct) => {
    const { name, thumbnail, _id, price } = productData;

    const userId = user.userId;

    if (!user && !userId) {
      // Add product to the local cart store
      dispatch(
        addProduct({
          name,
          thumbnail,
          id: _id,
          price,
        })
      );

      toast.success("Product added to cart locally.");
      return;
    }

    await addToCartInDB({
      product: _id,
      quantity: 1,
    }).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added to cart.");
    } else if (isError) {
      const errorMessage = (error as IGenericErrorResponse).message;
      toast.error(errorMessage);
    }
  }, [isSuccess, isError, error]);

  return (
    <Button
      color="primary"
      endIcon={
        isLoading ? (
          <CircularProgress size={16} sx={{ color: "white" }} />
        ) : (
          <ShoppingCart />
        )
      }
      sx={{
        fontWeight: "bold",
        textTransform: "uppercase",
        borderRadius: 2,
        p: 1,
      }}
      size={"small"}
      onClick={() => handleAddToCart(product)}
      disabled={isLoading}
    >
      {isLoading ? "Adding..." : "Add to cart"}
    </Button>
  );
}
