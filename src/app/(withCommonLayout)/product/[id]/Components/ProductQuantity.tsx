"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { useAddToCartMutation } from "@/redux/api/addToCart.api";
import { addProduct } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { IGenericErrorResponse, IProduct } from "@/types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProductQuantity({ product }: { product: IProduct }) {
  const [quantity, setQuantity] = useState(0);
  const user = useUserInfo();
  const [addToCartInDB, { isLoading, isSuccess, isError, error }] =
    useAddToCartMutation();
  const dispatch = useAppDispatch();

  const handleAddToCart = async (product: IProduct) => {
    const { name, thumbnail, _id, price } = product;

    const userId = user?.userId;

    const productQuantity = quantity || 1;

    if (!userId) {
      // Local cart handling
      dispatch(
        addProduct({
          name,
          thumbnail,
          id: _id,
          price,
          quantity: productQuantity,
        })
      );
      toast.success("Product added to cart locally.");
      setQuantity(0);
      return;
    }

    try {
      await addToCartInDB({ product: _id, quantity: productQuantity }).unwrap();
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added to cart.");
      setQuantity(0);
    } else if (isError) {
      const errorMessage = (error as IGenericErrorResponse).message;
      toast.error(errorMessage || "Failed to add product to cart.");
    }
  }, [isSuccess, isError, error]);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2} mt={1}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100px",
        }}
      >
        <IconButton
          size="small"
          color="primary"
          sx={{ position: "absolute", left: 0, zIndex: 1 }}
          onClick={handleDecrease}
        >
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>
        <TextField
          name="quantity"
          variant="outlined"
          size="small"
          value={quantity}
          inputProps={{ style: { textAlign: "center", width: "100%" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              padding: "0 30px",
            },
          }}
        />
        <IconButton
          size="small"
          color="primary"
          sx={{ position: "absolute", right: 0, zIndex: 1 }}
          onClick={handleIncrease}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </Button>
    </Stack>
  );
}
