import FormModal from "@/components/modal/FormModal/FormModal";
import ProductDetailsCompo from "./ProductDetailsCompo";

interface ProductDetailsModalProps {
  onModalClose: () => void;
  productId: string;
}

export default function ProductDetailsModal({
  onModalClose,
  productId,
}: ProductDetailsModalProps) {
  return (
    <FormModal
      title="Product Details"
      subtitle="Detailed information about the selected product"
      open
      onClose={onModalClose}
    >
      <ProductDetailsCompo productId={productId} />
    </FormModal>
  );
}
