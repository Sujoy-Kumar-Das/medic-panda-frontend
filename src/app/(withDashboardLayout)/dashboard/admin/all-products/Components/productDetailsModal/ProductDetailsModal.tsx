import CustomModal from "@/components/customModal/CustomModal";
import { Dispatch, SetStateAction } from "react";
import ProductDetailsCompo from "./productDetailsModal/ProductDetailsCompo";

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
      <ProductDetailsCompo productId={productId} onClose={onClose} />
    </CustomModal>
  );
}
