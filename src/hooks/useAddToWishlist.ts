"use client";
import { useAddToWishListMutation } from "@/redux/api/wish-listApi";
import { toast } from "sonner";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useAuth } from "./useAuth";

export default function useAddToWishlist() {
  const [addToWishList, apiResponse] = useAddToWishListMutation();

  const { user } = useAuth();

  const handlerFunc = async (id: string) => {
    if (!user) {
      toast.error("Please login for add to wishlist.");
      return;
    }

    await addToWishList({ product: id }).unwrap();
  };

  useApiMutationResponseHandler({
    successMessage: "Added to your wish list.",
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
