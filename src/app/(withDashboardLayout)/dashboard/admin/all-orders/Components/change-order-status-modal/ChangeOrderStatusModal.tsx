import CustomModal from "@/components/customModal/CustomModal";
import ChangeOrderStatusForm from "./ChangeOrderStausForm";

export default function ChangeOrderStatusModal({ open, setOpen, orderId }) {
  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      sxProps={{ width: "100%", maxWidth: 800, mx: "auto" }}
    >
      <CustomModal.TitleWithCloseButton
        onClose={() => setOpen(false)}
        titleSx={{ color: "primary.main" }}
      >
        Change Order Status
      </CustomModal.TitleWithCloseButton>
      <ChangeOrderStatusForm />
    </CustomModal>
  );
}
