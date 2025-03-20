import CustomModal from "@/components/modal/customModal/CustomModal";

export default function ManufacturerDetailsModal({ open, setOpen, onClose }) {
  return (
    <CustomModal open={open} setOpen={setOpen}>
      <h1>manufacture</h1>
    </CustomModal>
  );
}
