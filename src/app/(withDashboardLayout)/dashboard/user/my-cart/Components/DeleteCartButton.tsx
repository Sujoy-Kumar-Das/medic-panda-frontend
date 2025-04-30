"use client";
import useDeleteCart from "@/hooks/useDeleteCart";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface DeleteCartButtonProps {
  id: string;
}

export default function DeleteCartButton({ id }: DeleteCartButtonProps) {
  const { handlerFunc, isLoading } = useDeleteCart();

  return (
    <IconButton
      color="error"
      sx={{
        borderRadius: 1,
        bgcolor: "error.main",
        color: "white",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
          bgcolor: "error.dark",
        },
      }}
      disabled={isLoading}
      onClick={() => handlerFunc(id)}
    >
      <DeleteOutlineOutlined />
    </IconButton>
  );
}
