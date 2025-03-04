import CustomModal from "@/components/customModal/CustomModal";
import ChangeOrderStatusForm from "./ChangeOrderStausForm";

export default function ChangeOrderStatusModal({ open, setOpen, orderId }) {
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
