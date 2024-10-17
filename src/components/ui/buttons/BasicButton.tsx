import { IProduct } from "@/types";
import { ShoppingCart } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";

interface IBasicButtonProps {
  isLoading: boolean;
  handler: (product: IProduct) => void;
  product: IProduct;
}

export default function BasicButton({
  isLoading,
  handler,
  product,
}: IBasicButtonProps) {
  return (
    <Button
      color="primary"
      endIcon={
        isLoading ? (
          <CircularProgress size={16} sx={{ color: "white" }} />
        ) : (
          <ShoppingCart />
        )
      }
      sx={{
        fontWeight: "bold",
        textTransform: "uppercase",
        borderRadius: 2,
        p: 1,
      }}
      size={"small"}
      onClick={() => handler(product)}
      disabled={isLoading}
    >
      {isLoading ? "Adding..." : "Add to cart"}
    </Button>
  );
}
