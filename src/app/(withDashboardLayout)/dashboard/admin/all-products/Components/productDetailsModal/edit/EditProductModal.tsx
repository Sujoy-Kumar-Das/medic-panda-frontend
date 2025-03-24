import FormModal from "@/components/modal/FormModal/FormModal";
import EditProductForm from "./form/EditProductForm";

interface EditProductModalProps {
  productId: string;
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
}

export default function EditProductModal({
  productId,
  open,
  onModalClose,
  onClose,
}: EditProductModalProps) {
  // handle close the menu and and modal handler
  const handleClose = () => {
    onModalClose();
    onClose();
  };
  return (
    <FormModal
      title="Edit Product"
      subtitle="Modify the product details below and save changes"
      open={open}
      onClose={handleClose}
    >
      <EditProductForm onClose={handleClose} productId={productId} />
    </FormModal>
  );
}
