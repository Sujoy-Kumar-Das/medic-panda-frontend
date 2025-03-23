import FormModal from "@/components/modal/FormModal/FormModal";
import { ICategory } from "@/types";
import EditCategoryForm from "./EditCategoryForm";

interface EditCategoryModalProps {
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
  category: ICategory;
}

export default function EditCategoryModal({
  open,
  onModalClose,
  onClose,
  category,
}: EditCategoryModalProps) {
  const handleCloseModal = () => {
    onModalClose();
    onClose();
  };
  return (
    <FormModal
      title="Edit Category"
      subtitle="Modify category details to ensure accurate classification of medicines"
      open={open}
      onClose={handleCloseModal}
    >
      <EditCategoryForm category={category} onClose={handleCloseModal} />
    </FormModal>
  );
}
