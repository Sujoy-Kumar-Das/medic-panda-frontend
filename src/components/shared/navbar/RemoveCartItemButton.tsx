/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useUserInfo from "@/hooks/useUserInfo";
import { useRemoveCartProductMutation } from "@/redux/api/addToCart.api";
import { decreaseQuantity } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { IGenericErrorResponse } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete";
import { CircularProgress, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function RemoveCartItemButton({ id, handleCloseUserMenu }) {
  // Local loading state for each product
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  //   get user
  const { userInfo: user } = useUserInfo();

  const dispatch = useAppDispatch();

  // remove cart from server via rtk query
  const [removeCartItemFromDB, { isSuccess, isError, error }] =
    useRemoveCartProductMutation();

  const handleRemoveFromCart = async (id: string) => {
    const userId = user?.userId;

    // Set loading state for the specific product
    setLoadingProductId(id);

    if (!user && !userId) {
      dispatch(decreaseQuantity({ id }));
      setLoadingProductId(null); // Reset loader after dispatch
      return;
    }

    // Remove from db
    await removeCartItemFromDB({
      product: id,
    }).unwrap();
  };

  // Manage remove product from db state;
  useEffect(() => {
    if (isSuccess) {
      toast.success("Item removed from cart");
      handleCloseUserMenu();
      setLoadingProductId(null);
    } else if (isError) {
      toast.error((error as IGenericErrorResponse).message);
      setLoadingProductId(null);
    }
  }, [isSuccess, isError, error]);

  return (
    <IconButton
      onClick={() => handleRemoveFromCart(id)}
      disabled={loadingProductId === id}
      color="error"
      sx={{
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(255, 0, 0, 0.1)",
        },
      }}
    >
      {loadingProductId === id ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        <DeleteIcon />
      )}
    </IconButton>
  );
}
