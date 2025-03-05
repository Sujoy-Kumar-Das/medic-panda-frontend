import DeleteModal from "@/components/modal/delete-modal/DeleteModal";
import { Dispatch, SetStateAction } from "react";
import DeleteProductConfirmButton from "./DeleteProductConfirmButton";
import ProductDeleteCancelButton from "./ProductDeleteCancelButton";

interface DeleteProductModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  productId: string;
  onClose: () => void;
}

export default function DeleteProductModal({
  open,
  setOpen,
  productId,
  onClose,
}: DeleteProductModalProps) {
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <DeleteModal
      title="Are you sure you want to delete this product?"
      message="Deleting this product is permanent and cannot be undone. Please confirm your action."
      open={open}
      setOpen={setOpen}
    >
      <ProductDeleteCancelButton onClose={handleClose} />
      <DeleteProductConfirmButton id={productId} onClose={handleClose} />
    </DeleteModal>
  );
}
