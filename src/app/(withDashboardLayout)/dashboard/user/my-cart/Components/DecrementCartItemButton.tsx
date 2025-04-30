"use client";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
export default function DecrementCartItemButton({
  onChange,
}: {
  onChange: () => void;
}) {
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
      onClick={onChange}
    >
      <RemoveIcon />
    </IconButton>
  );
}
