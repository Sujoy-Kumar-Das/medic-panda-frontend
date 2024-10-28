"use client";
import { useAddToWishListMutation } from "@/redux/api/wish-listApi";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CircularProgress, IconButton, SxProps, Tooltip } from "@mui/material";
import { toast } from "sonner";

interface IWishListButtonProps {
  id: string;
  btnType?: "Discount" | "Summer";
  sx?: SxProps;
}

export default function WishListButton({
  id,
  btnType,
  sx,
}: IWishListButtonProps) {
  const [addToWishList, { isLoading }] = useAddToWishListMutation();

  const handleAddToWishList = async () => {
    try {
      const res = await addToWishList({ product: id }).unwrap();

      if (!res.success) {
        toast.error(res.message);
      }

      toast.success("Added to your wish list.");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Tooltip title="Add To Wishlist">
      {btnType === "Discount" ? (
        <IconButton
          className="button"
          sx={{
            color: "primary.main",
            border: "1px solid #cccccc",
            height: "40px",
            width: "40px",
            padding: "10px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: "translateX(100%)",
            opacity: 0,
            "&:hover": {
              color: "primary.main",
              borderColor: "primary.main",
              transform: "scale(1.1) translateX(0)",
            },
            ...sx,
          }}
          onClick={handleAddToWishList}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : <FavoriteBorderIcon />}
        </IconButton>
      ) : btnType === "Summer" ? (
        <IconButton
          color="primary"
          size="small"
          className="button"
          sx={{
            transform: "translateY(500px)",
            opacity: 0,
            transition:
              "transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.4s ease",
            ...sx,
          }}
          onClick={handleAddToWishList}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : <FavoriteBorderIcon />}
        </IconButton>
      ) : (
        <IconButton
          color="primary"
          aria-label="add to favorites"
          onClick={handleAddToWishList}
          disabled={isLoading}
          sx={{ ...sx }}
        >
          {isLoading ? <CircularProgress size={24} /> : <FavoriteBorderIcon />}
        </IconButton>
      )}
    </Tooltip>
  );
}
