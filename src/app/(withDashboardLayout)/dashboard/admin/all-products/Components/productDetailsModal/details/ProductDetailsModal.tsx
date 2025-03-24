import FormModal from "@/components/modal/FormModal/FormModal";
import ProductDetailsCompo from "./ProductDetailsCompo";

interface ProductDetailsModalProps {
  open: boolean;
  onModalClose: () => void;
  productId: string;
  onClose: () => void;
}

export default function ProductDetailsModal({
  open,
  onModalClose,
  productId,
  onClose,
}: ProductDetailsModalProps) {
  // handle close the menu item and modal handler
  const handleCloseModal = () => {
    onModalClose();
    onClose();
  };
  return (
    <FormModal
      title="Product Details"
      subtitle="Detailed information about the selected product"
      open={open}
      onClose={handleCloseModal}
    >
      <ProductDetailsCompo productId={productId} />
    </FormModal>
  );
}
