"use client";
import { useAddToCartMutation } from "@/redux/api";
import { addToCartProduct } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { IProduct } from "@/types";
import { toast } from "sonner";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useAuth } from "./useAuth";

export default function useAddToCart(onClose?: () => void) {
  const { user } = useAuth();
  const [addToCartInDB, apiResponse] = useAddToCartMutation();

  const dispatch = useAppDispatch();

  const handlerFunc = async (productData: IProduct) => {
    const { name, thumbnail, _id, price } = productData;
    const userId = user?.id;

    if (!userId) {
      // Local cart handling
      dispatch(addToCartProduct({ name, thumbnail, id: _id, price }));
      toast.success("Product added to cart locally.");
      return;
    }

    await addToCartInDB({ product: _id });
  };

  useApiMutationResponseHandler({
    successMessage: "Product added to cart.",
    apiResponse,
    ...(onClose && { onClose }),
  });
  return { handlerFunc, ...apiResponse };
}
