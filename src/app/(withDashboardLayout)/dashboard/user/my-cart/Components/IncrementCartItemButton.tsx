"use client";
import useIncrementCartItem from "@/hooks/useIncrementCartItem";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

export default function IncrementCartItemButton({ id }: { id: string }) {
  const { handlerFunc, isLoading } = useIncrementCartItem();
  return (
    <IconButton
      color="primary"
      sx={{
        borderRadius: 1,
        bgcolor: "primary.light",
        color: "white",
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "scale(1.1)",
          bgcolor: "primary.dark",
        },
      }}
      disabled={isLoading}
      onClick={() => handlerFunc(id)}
    >
      <AddIcon />
    </IconButton>
  );
}
