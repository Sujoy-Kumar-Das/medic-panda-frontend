"use client";
import AnimateLoadingButton from "@/components/ui/buttons/AnimateLoadingButton";
import useRemoveCartItem from "@/hooks/useRemoveCartItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

interface IRemoveCartItemButtonProps {
  id: string;
  onClose: () => void;
}

export default function RemoveCartItemButton({
  id,
  onClose,
}: IRemoveCartItemButtonProps) {
  const { handlerFunc, loadingProductId } = useRemoveCartItem(onClose);
  const isLoading = loadingProductId === id;

  return (
    <IconButton
      onClick={() => handlerFunc(id)}
      disabled={isLoading}
      color="error"
      sx={{
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(255, 0, 0, 0.1)",
        },
      }}
    >
      <AnimateLoadingButton isLoading={isLoading}>
        <DeleteIcon />
      </AnimateLoadingButton>
    </IconButton>
  );
}
