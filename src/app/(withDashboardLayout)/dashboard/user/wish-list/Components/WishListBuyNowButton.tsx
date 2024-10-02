import { useAddToCartMutation } from "@/redux/api/addToCart.api";
import { IGenericErrorResponse } from "@/types";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function WishListBuyNowButton({ id }: { id: string }) {
  const [addToCart, { isLoading, isError, error, isSuccess, data: cartData }] =
    useAddToCartMutation();

  const router = useRouter();

  // handle buy now product
  const handleBuyNowFromWishList = async (id: string) => {
    await addToCart({
      product: id,
      quantity: 1,
    }).unwrap();
  };

  // manage buy now product state
  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added to your cart.");
      router.push(`/dashboard/user/check-out/${cartData._id}`);
    } else if (isError) {
      const errorMessage =
        (error as IGenericErrorResponse)?.message ||
        "An error occurred while adding to cart.";
      toast.error(errorMessage);
    }
  }, [isSuccess, isError, error, router, cartData]);

  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      sx={{
        flex: 1,
        mr: 1,
        boxShadow: "none",
        position: "relative",
        "&:hover": {
          backgroundColor: "#0056b3",
          boxShadow: 2,
        },
      }}
      onClick={() => handleBuyNowFromWishList(id)}
      disabled={isLoading}
    >
      {isLoading ? (
        <CircularProgress
          size={24}
          sx={{ color: "white", position: "absolute" }}
        />
      ) : (
        "Buy Now"
      )}
    </Button>
  );
}
