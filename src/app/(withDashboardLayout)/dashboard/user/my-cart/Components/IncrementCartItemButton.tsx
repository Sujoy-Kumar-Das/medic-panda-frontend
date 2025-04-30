"use client";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

export default function IncrementCartItemButton({
  onChange,
}: {
  onChange: () => void;
}) {
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
      onClick={onChange}
    >
      <AddIcon />
    </IconButton>
  );
}
