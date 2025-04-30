import useAddToCart from "@/hooks/useAddToCart";
import { IProduct } from "@/types";
import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

export default function WishListBuyNowButton({
  productData,
}: {
  productData: IProduct;
}) {
  const { handlerFunc, isLoading, data } = useAddToCart(redirectAddToCart);

  const router = useRouter();

  function redirectAddToCart() {
    router.push(`/dashboard/user/check-out/${data._id}`);
  }

  return (
    <LoadingButton
      onClick={() => handlerFunc({ ...productData })}
      disabled={isLoading}
      loadingIndicator={<CircularProgress size={24} color="inherit" />}
      loading={isLoading}
      fullWidth
    >
      Buy Now
    </LoadingButton>
  );
}
