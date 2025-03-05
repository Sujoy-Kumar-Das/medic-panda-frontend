import CustomModal from "@/components/modal/customModal/CustomModal";
import { Divider, Stack, Typography } from "@mui/material";
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
    setOpenAddAdminModal(false);
  };

  return (
    <CustomModal open={openAddAdminModal} setOpen={setOpenAddAdminModal}>
      <Stack spacing={2} alignItems="center">
        <Stack
          direction="row"
          width="100%"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          {/* Close Button at Top Right */}
          <CustomModal.CloseButton
            sxProps={{
              position: "absolute",
              right: 0,
            }}
            onClose={handleCloseAdminModal}
          />

          {/* Centered Title */}
          <Typography variant="h5" fontWeight="bold">
            Add New Admin
          </Typography>
        </Stack>

        <Divider sx={{ width: "100%" }} />
        <Typography variant="body2" color="text.secondary">
          Enter the email address to grant admin access.
        </Typography>

        <AddAdminForm onClose={handleCloseAdminModal} />
      </Stack>
    </CustomModal>
  );
}
