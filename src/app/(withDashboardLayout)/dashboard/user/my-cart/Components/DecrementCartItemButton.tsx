"use client";
import useDecrementCartItem from "@/hooks/useDecrementCartItem";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
export default function DecrementCartItemButton({ id }: { id: string }) {
  const { handlerFunc, isLoading } = useDecrementCartItem();
  return (
    <IconButton
      color="secondary"
      sx={{
        borderRadius: 1,
        bgcolor: "secondary.light",
        color: "white",
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "scale(1.1)",
          bgcolor: "secondary.dark",
        },
      }}
      disabled={isLoading}
      onClick={() => handlerFunc(id)}
    >
      <RemoveIcon />
    </IconButton>
  );
}
