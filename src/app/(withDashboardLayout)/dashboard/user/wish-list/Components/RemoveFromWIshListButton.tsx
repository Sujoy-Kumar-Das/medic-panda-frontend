import useRemoveFromWishList from "@/hooks/useRemoveFromWishList";
import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";

export default function RemoveFromWishListButton({ id }: { id: string }) {
  const { handlerFunc, isLoading } = useRemoveFromWishList();
  return (
    <LoadingButton
      disabled={isLoading}
      loadingIndicator={
        <CircularProgress size={24} sx={{ color: "text.primary" }} />
      }
      loading={isLoading}
      onClick={() => handlerFunc(id)}
    >
      Remove
    </LoadingButton>
  );
}
