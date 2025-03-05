import CustomModal from "@/components/modal/customModal/CustomModal";
import { Dispatch, SetStateAction } from "react";
import AddProductForm from "./add-product-form/AddProductForm";
import AddProductModalHeader from "./AddProductModalHeader";
interface AddProductModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function AddProductModal({
  open,
  setOpen,
}: AddProductModalProps) {
  const handleCloseModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CustomModal open={open} setOpen={setOpen}>
      <AddProductModalHeader onClose={handleCloseModal} />
      <AddProductForm onClose={handleCloseModal} />
    </CustomModal>
  );
}
