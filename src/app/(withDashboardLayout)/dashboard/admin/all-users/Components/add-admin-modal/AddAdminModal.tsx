import FormModal from "@/components/modal/FormModal/FormModal";
import AddAdminForm from "./AddAdminForm";

interface AddAdminModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddAdminModal({ open, onClose }: AddAdminModalProps) {
  return (
    <FormModal
      open={open}
      onClose={onClose}
      title="Add New Admin"
      subtitle="Enter the email address to grant admin access."
    >
      <AddAdminForm onClose={onClose} />
    </FormModal>
  );
}
