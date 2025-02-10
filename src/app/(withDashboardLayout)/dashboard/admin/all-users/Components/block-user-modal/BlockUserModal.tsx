import CustomModal from "@/components/customModal/CustomModal";
import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import BlockUserCancelButton from "./BlockUserCancelButton";
import BlockUserButton from "./ConfirmBlockUserButton";

// Define the types for the props
interface BlockUserModalProps {
  userId: string;
  openBlockUserModal: boolean;
  setOpenBlockUserModal: Dispatch<SetStateAction<boolean>>;
}

export default function BlockUserModal({
  userId,
  openBlockUserModal,
  setOpenBlockUserModal,
}: BlockUserModalProps) {
  const handleClose = () => {
    setOpenBlockUserModal((prev) => !prev);
  };

  return (
    <CustomModal
      sxProps={{
        "& .MuiDialog-paper": {
          padding: 3,
          backgroundColor: "background.paper",
          borderRadius: 3,
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "50%",
        },
      }}
      open={openBlockUserModal}
      setOpen={setOpenBlockUserModal}
      closeBtn={false}
    >
      <Typography
        variant="h5"
        sx={{
          color: "warning.main",
          fontWeight: "bold",
          marginBottom: 2,
        }}
      >
        Warning: Block User
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          marginBottom: 3,
        }}
      >
        Are you sure you want to block this user?
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <BlockUserCancelButton handleClose={handleClose} />
        <BlockUserButton userId={userId} onClose={handleClose} />
      </Box>
    </CustomModal>
  );
}
