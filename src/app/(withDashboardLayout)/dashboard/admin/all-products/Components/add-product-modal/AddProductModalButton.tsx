import useToggleState from "@/hooks/useToggleState";
import { Button } from "@mui/material";
import AddProductModal from "./AddProductModal";

export default function AddProductModalButton() {
  const addProductModal = useToggleState();

  return (
    <>
      <Button onClick={addProductModal.onOpen}>Add Product</Button>

      {addProductModal.state && (
        <AddProductModal
          open={addProductModal.state}
          onClose={addProductModal.onClose}
        />
      )}
    </>
  );
}
