import CustomModal from "@/components/customModal/CustomModal";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import AddAdminForm from "./AddAdminForm";

interface AddAdminModalProps {
  openAddAdminModal: boolean;
  setOpenAddAdminModal: Dispatch<SetStateAction<boolean>>;
}

export default function AddAdminModal({
  openAddAdminModal,
  setOpenAddAdminModal,
}: AddAdminModalProps) {
  const handleCloseAdminModal = () => {
    setOpenAddAdminModal((prev) => !prev);
  };
  return (
    <CustomModal open={openAddAdminModal} setOpen={setOpenAddAdminModal}>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          Add New Admin
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          Enter the email address to grant admin access.
        </Typography>

        <AddAdminForm onClose={handleCloseAdminModal} />
      </Stack>
    </CustomModal>
  );
}
