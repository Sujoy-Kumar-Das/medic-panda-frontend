"use client";
import useAddToWishlist from "@/hooks/useAddToWishlist";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CircularProgress, IconButton, SxProps, Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface IWishListButtonProps {
  id: string;
  sx?: SxProps;
  children?: ReactNode;
}

export default function WishListButton({
  id,
  sx,
  children,
}: IWishListButtonProps) {
  const { handlerFunc, isLoading } = useAddToWishlist();

  const icon = children || <FavoriteBorderIcon />;

  return (
    <Tooltip title="Add To Wishlist">
      <IconButton
        color="primary"
        aria-label="add to favorites"
        onClick={() => handlerFunc(id)}
        disabled={isLoading}
        sx={{ ...sx }}
      >
        {isLoading ? <CircularProgress size={24} /> : icon}
      </IconButton>
    </Tooltip>
  );
}
