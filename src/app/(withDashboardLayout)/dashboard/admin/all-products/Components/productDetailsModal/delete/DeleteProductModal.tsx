import DeleteModal from "@/components/modal/warning-modal/WarningModal";
import DeleteProductConfirmButton from "./DeleteProductConfirmButton";
import ProductDeleteCancelButton from "./ProductDeleteCancelButton";

interface DeleteProductModalProps {
  open: boolean;
  onModalClose: () => void;
  productId: string;
  onClose: () => void;
}

export default function DeleteProductModal({
  open,
  onModalClose,
  productId,
  onClose,
}: DeleteProductModalProps) {
  const handleClose = () => {
    onModalClose();
    onClose();
  };

  return (
    <DeleteModal
      title="Are you sure you want to delete this product?"
      message="Deleting this product is permanent and cannot be undone. Please confirm your action."
      open={open}
      onClose={handleClose}
    >
      <ProductDeleteCancelButton onClose={handleClose} />
      <DeleteProductConfirmButton id={productId} onClose={handleClose} />
    </DeleteModal>
  );
}
