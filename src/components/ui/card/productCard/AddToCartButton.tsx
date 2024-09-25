"use client";
import { addProduct } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { getUserInfo } from "@/services/actions/auth.service";
import { ShoppingCart } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import { toast } from "sonner";
import { useAddToCartMutation } from "../../../../redux/api/addToCart.api";

export default function AddToCartButton({ product }) {
  const [addToCartInDB, { isLoading }] = useAddToCartMutation();
  const user = getUserInfo();
  const dispatch = useAppDispatch();

  const handleAddToCart = async (productData) => {
    if (!user && !user?.userId) {
      const { name, thumbnail, _id, price } = productData;

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

    try {
      const res = await addToCartInDB({
        product: productData._id,
        quantity: 1,
      }).unwrap();

      if (res._id) {
        toast.success("Product added to cart.");
      }
    } catch (error) {
      toast.error("Failed to add product to cart.");
    }
  };

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
