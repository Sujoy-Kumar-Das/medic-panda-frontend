"use client";

import useAddToWishlist from "@/hooks/useAddToWishlist";
import useRemoveFromWishList from "@/hooks/useRemoveFromWishList";
import { TTagTypes } from "@/redux/tag-types";
import { revalidateTagFunc } from "@/services/actions/revalidateTagFunc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CircularProgress, IconButton, SxProps } from "@mui/material";
import { ReactNode } from "react";

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
  const { handlerFunc: addToWishlist, isLoading: addLoading } =
    useAddToWishlist();
  const { handlerFunc: removeFromWishlist, isLoading: removeLoading } =
    useRemoveFromWishList();

  const loading = addLoading || removeLoading;

  const icon = children ? (
    children
  ) : isWishList ? (
    <FavoriteIcon color="error" />
  ) : (
    <FavoriteBorderIcon />
  );

  const title = isWishList ? "Remove From Wishlist" : "Add To Wishlist";

  const handleClick = async () => {
    if (loading) return;

    if (isWishList) {
      await removeFromWishlist(id);
    } else {
      await addToWishlist(id);
    }

    // revalidate cache after action
    await revalidateTagFunc(TTagTypes.product);
  };

  return (
    <IconButton
      onClick={handleClick}
      disabled={loading}
      title={title}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "#fff",
        boxShadow: 1,
        zIndex: 1,
        "&:hover": { color: "red" },
        ...sx,
      }}
    >
      {loading ? <CircularProgress size={20} /> : icon}
    </IconButton>
  );
}
