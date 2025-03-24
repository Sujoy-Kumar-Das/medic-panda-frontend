import FormModal from "@/components/modal/FormModal/FormModal";
import AddProductForm from "./add-product-form/AddProductForm";
interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddProductModal({
  open,
  onClose,
}: AddProductModalProps) {
  return (
    <FormModal
      title="Add New Product"
      subtitle="Fill out the details below to add a new product"
      open={open}
      onClose={onClose}
    >
      <AddProductForm onClose={onClose} />
    </FormModal>
  );
}
