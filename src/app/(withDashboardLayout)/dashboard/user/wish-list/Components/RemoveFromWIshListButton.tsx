import { useRemoveWishListProductMutation } from "@/redux/api/wish-listApi";
import { IGenericErrorResponse } from "@/types";
import { Button, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { toast } from "sonner";

export default function RemoveFromWishListButton({ id }: { id: string }) {
  const [removeFromWishList, { isLoading, isError, error, isSuccess }] =
    useRemoveWishListProductMutation();

  // handle remove from wishlist
  const handleRemoveFromWishList = async (id: string) => {
    await removeFromWishList(id).unwrap();
  };

  // manage remove from wishlist state
  useEffect(() => {
    if (isSuccess) {
      toast.success("Product removed from your wish list.");
    } else if (isError && error) {
      const errorMessage =
        (error as IGenericErrorResponse)?.message || "An error occurred";
      toast.error(errorMessage);
    }
  }, [isSuccess, isError, error]);

  return (
    <Button
      variant="outlined"
      color="secondary"
      size="small"
      disabled={isLoading}
      sx={{
        flex: 1,
        position: "relative", // To properly position the loader
        "&:hover": {
          borderColor: "#6c757d",
        },
      }}
      onClick={() => handleRemoveFromWishList(id)}
    >
      {isLoading ? (
        <CircularProgress
          size={24}
          sx={{
            color: "inherit",
            position: "absolute",
          }}
        />
      ) : (
        "Remove"
      )}
    </Button>
  );
}
