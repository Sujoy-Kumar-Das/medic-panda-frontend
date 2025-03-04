import CustomModal from "@/components/customModal/CustomModal";
import { Dispatch, SetStateAction } from "react";
import ChangeOrderStatusForm from "./ChangeOrderStausForm";

interface ChangeOrderStatusModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  orderId: string;
}

export default function ChangeOrderStatusModal({
  open,
  setOpen,
  orderId,
}: ChangeOrderStatusModalProps) {
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      sxProps={{ width: "100%", maxWidth: 800, mx: "auto" }}
    >
      <CustomModal.TitleWithCloseButton
        onClose={handleCloseModal}
        titleSx={{ color: "primary.main" }}
      >
        Change Order Status
      </CustomModal.TitleWithCloseButton>

      <ChangeOrderStatusForm orderId={orderId} onChange={handleCloseModal} />
    </CustomModal>
  );
}
