import FormModal from "@/components/modal/FormModal/FormModal";
import AddCategoryForm from "./AddCategoryForm";

interface AddCategoryModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddCategoryModal({
  open,
  onClose,
}: AddCategoryModalProps) {
  return (
    <FormModal
      title=" Add Medicine Category"
      subtitle=" Create a new category to organize medicines effectively."
      open={open}
      onClose={onClose}
    >
      {/* Form */}
      <AddCategoryForm onClose={onClose} />
    </FormModal>
  );
}
