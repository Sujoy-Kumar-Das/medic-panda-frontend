/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useRemoveCartItem from "@/hooks/useRemoveCartItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { CircularProgress, IconButton } from "@mui/material";

interface IRemoveCartItemButtonProps {
  id: string;
  onClose: () => void;
}

export default function RemoveCartItemButton({
  id,
  onClose,
}: IRemoveCartItemButtonProps) {
  const { handlerFunc, loadingProductId } = useRemoveCartItem(onClose);

  return (
    <IconButton
      onClick={() => handlerFunc(id)}
      disabled={loadingProductId === id}
      color="error"
      sx={{
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(255, 0, 0, 0.1)",
        },
      }}
    >
      {loadingProductId === id ? (
        <CircularProgress size={24} color="inherit" />
      ) : (
        <DeleteIcon />
      )}
    </IconButton>
  );
}
