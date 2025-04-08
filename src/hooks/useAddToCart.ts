import { useAddToCartMutation } from "@/redux/api/addToCart.api";
import { addProduct } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { IProduct } from "@/types";
import { toast } from "sonner";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useAuth } from "./useAuth";

export default function useAddToCart() {
  const { user } = useAuth();
  const [addToCartInDB, apiResponse] = useAddToCartMutation();

  const dispatch = useAppDispatch();

  const handlerFunc = async (productData: IProduct) => {
    const { name, thumbnail, _id, price } = productData;
    const userId = user?.userId;

    if (!userId) {
      // Local cart handling
      dispatch(addProduct({ name, thumbnail, id: _id, price }));
      toast.success("Product added to cart locally.");
      return;
    }

    await addToCartInDB({ product: _id, quantity: 1 }).unwrap();
  };

  useApiMutationResponseHandler({
    successMessage: "Product added to cart.",
    apiResponse,
  });
  return { handlerFunc, ...apiResponse };
}
