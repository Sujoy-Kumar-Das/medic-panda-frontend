import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
export default function NavCartLoaderButton() {
  return (
    <Button
      variant="contained"
      endIcon={<ShoppingCartIcon />}
      sx={{
        boxShadow: "none",
        display: "flex",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
        borderRadius: 2,
        px: 3,
        py: 1,
      }}
    >
      My Cart
    </Button>
  );
}
