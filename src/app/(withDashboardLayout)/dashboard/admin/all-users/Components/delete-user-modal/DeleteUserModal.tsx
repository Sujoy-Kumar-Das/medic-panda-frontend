import CustomModal from "@/components/customModal/CustomModal";
import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import DeleteUserButton from "./ConfirmDeleteUserButton";
import DeleteUserCancelButton from "./DeleteUserCancelButton";

// Define the types for the props
interface DeleteUserModalProps {
  userId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DeleteUserModal({
  userId,
  open,
  setOpen,
}: DeleteUserModalProps) {
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
        Warning: Delete User
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          marginBottom: 3,
        }}
      >
        Are you sure you want to Delete this user?
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <DeleteUserCancelButton onClose={handleClose} />
        <DeleteUserButton userId={userId} onClose={handleClose} />
      </Box>
    </CustomModal>
  );
}
