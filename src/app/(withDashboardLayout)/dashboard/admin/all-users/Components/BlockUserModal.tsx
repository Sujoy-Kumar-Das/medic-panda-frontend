import CustomModal from "@/components/customModal/CustomModal";
import { Box, Button, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

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
  const handleClose = () => setOpenBlockUserModal(false);

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
      <Box>
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
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              color: "warning.main",
              borderColor: "warning.main",
              "&:hover": {
                backgroundColor: "#FFECB3",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              console.log(`Blocked user with ID: ${userId}`);
              handleClose();
            }}
            variant="contained"
            sx={{
              backgroundColor: "warning.main",
              color: "white",
              "&:hover": {
                backgroundColor: "warning.dark",
              },
            }}
          >
            Block User
          </Button>
        </Box>
      </Box>
    </CustomModal>
  );
}
