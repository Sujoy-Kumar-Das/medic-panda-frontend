import { Button, CircularProgress } from "@mui/material";
import useDeleteProduct from "./useDeleteProduct.hook";

export default function DeleteProductModalButton({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const { handleDeleteProduct, isLoading } = useDeleteProduct();

  const handleDelete = async (id: string) => {
    await handleDeleteProduct(id);
    onClose();
  };

  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => handleDelete(id)}
      sx={{ width: 120 }}
    >
      {isLoading ? <CircularProgress size={24} color="inherit" /> : "Delete"}
    </Button>
  );
}
