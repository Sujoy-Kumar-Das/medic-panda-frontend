import CustomModal from "@/components/modal/customModal/CustomModal";
import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import UnBlockUserButton from "./ConfirmUnBlockUserButton";
import UnBlockUserCancelButton from "./UnBlockUserCancelButton";

// Define the types for the props
interface UnblockUserModalProps {
  userId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function UnblockUserModal({
  userId,
  open,
  setOpen,
}: UnblockUserModalProps) {
  const handleClose = () => {
    setOpen((prev) => !prev);
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
      open={open}
      setOpen={setOpen}
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
        Confirm: Unblock User
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          marginBottom: 3,
        }}
      >
        Are you sure you want to unblock this user? This action will grant the
        user access again.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <UnBlockUserCancelButton onClose={handleClose} />
        <UnBlockUserButton userId={userId} onClose={handleClose} />
      </Box>
    </CustomModal>
  );
}
