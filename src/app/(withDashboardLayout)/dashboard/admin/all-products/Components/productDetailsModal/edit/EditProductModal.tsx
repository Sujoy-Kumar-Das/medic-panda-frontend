import CustomModal from "@/components/modal/customModal/CustomModal";
import { Dispatch, SetStateAction } from "react";
import EditProductHeader from "./EditProductHeader";
import EditProductForm from "./form/EditProductForm";

interface EditProductModalProps {
  productId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
}

export default function EditProductModal({
  productId,
  open,
  setOpen,
  onClose,
}: EditProductModalProps) {
  // handle close the menu and and modal handler
  const handleClose = () => {
    setOpen((prev) => !prev);
    onClose();
  };
  return (
    <CustomModal open={open} setOpen={setOpen}>
      <EditProductHeader onClose={handleClose} />
      <EditProductForm onClose={handleClose} productId={productId} />
    </CustomModal>
  );
}
