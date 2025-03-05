import CustomModal from "@/components/modal/customModal/CustomModal";
import { Dispatch, SetStateAction } from "react";
import ProductDetailsCompo from "./ProductDetailsCompo";

interface ProductDetailsModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  productId: string;
  onClose: () => void;
}

export default function ProductDetailsModal({
  open,
  setOpen,
  productId,
  onClose,
}: ProductDetailsModalProps) {
  // handle close the menu item and modal handler
  const handleCloseModal = () => {
    setOpen((prev) => !prev);
    onClose();
  };
  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      sxProps={{
        "& .MuiDialog-paper": {
          padding: 0,
        },
      }}
    >
      <ProductDetailsCompo productId={productId} onClose={handleCloseModal} />
    </CustomModal>
  );
}
