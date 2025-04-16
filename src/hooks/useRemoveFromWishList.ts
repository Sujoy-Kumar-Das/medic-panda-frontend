import { useRemoveWishListProductMutation } from "@/redux/api/wish-listApi";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function useRemoveFromWishList() {
  const [removeFromWishList, apiResponse] = useRemoveWishListProductMutation();

  // handle remove from wishlist
  const handlerFunc = async (id: string) => {
    await removeFromWishList(id);
  };

  // manage remove from wishlist state
  useApiMutationResponseHandler({
    successMessage: "Product removed from your wish list.",
    apiResponse,
  });

  return {
    handlerFunc,
    ...apiResponse,
  };
}
