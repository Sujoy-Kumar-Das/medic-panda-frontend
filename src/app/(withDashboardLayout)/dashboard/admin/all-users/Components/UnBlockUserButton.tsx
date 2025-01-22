import { Button } from "@mui/material";

interface UnBlockUserButtonProps {
  userId: string;
  onClose: () => void;
}

const UnBlockUserButton = ({ userId, onClose }: UnBlockUserButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "warning.main",
        color: "white",
        "&:hover": {
          backgroundColor: "warning.dark",
        },
        transition: "background-color 0.3s ease",
      }}
    >
      Unblock User
    </Button>
  );
};

export default UnBlockUserButton;
