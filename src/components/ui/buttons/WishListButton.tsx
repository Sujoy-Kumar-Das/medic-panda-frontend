"use client";
import useAddToWishlist from "@/hooks/useAddToWishlist";
import useRemoveFromWishList from "@/hooks/useRemoveFromWishList";
import { TTagTypes } from "@/redux/tag-types";
import { revalidateTagFunc } from "@/services/actions/revalidateTagFunc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, SxProps, Tooltip } from "@mui/material";
import { ReactNode } from "react";
import AnimateLoadingButton from "./AnimateLoadingButton";
interface IWishListButtonProps {
  id: string;
  sx?: SxProps;
  children?: ReactNode;
  isWishList: boolean;
}

export default function WishListButton({
  id,
  sx,
  children,
  isWishList,
}: IWishListButtonProps) {
  const { handlerFunc, isLoading } = useAddToWishlist();

  const {
    handlerFunc: handleRemoveWishList,
    isLoading: removeWishlistLoading,
  } = useRemoveFromWishList();

  const icon =
    children || isWishList ? <FavoriteIcon /> : <FavoriteBorderIcon />;

  const title = isWishList ? "Remove From Wish List." : "Add To Wishlist";

  const handleAddToWishList = async () => {
    await handlerFunc(id);
    await revalidateTagFunc(TTagTypes.product);
  };

  const handleRemoveFromWishList = async () => {
    await handleRemoveWishList(id);
    await revalidateTagFunc(TTagTypes.product);
  };

  return (
    <Tooltip title={title}>
      {isWishList ? (
        <IconButton
          color="error"
          aria-label="remove from favorites"
          onClick={handleRemoveFromWishList}
          disabled={removeWishlistLoading}
          sx={{ ...sx }}
        >
          <AnimateLoadingButton isLoading={isLoading}>
            {icon}
          </AnimateLoadingButton>
        </IconButton>
      ) : (
        <IconButton
          color="primary"
          aria-label="add to favorites"
          onClick={handleAddToWishList}
          disabled={isLoading}
          sx={{ ...sx }}
        >
          <AnimateLoadingButton isLoading={isLoading}>
            {icon}
          </AnimateLoadingButton>
        </IconButton>
      )}
    </Tooltip>
  );
}
