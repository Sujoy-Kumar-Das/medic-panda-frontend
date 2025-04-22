import CustomModal from "@/components/modal/customModal/CustomModal";
import { useGetSingleUserQuery } from "@/redux/api";
import { Typography } from "@mui/material";
import UserDetailCloseButton from "./UserDetailCloseButton";
import UserDetailsCard from "./UserDetailsCard";
import UserDetailsCardSkeleton from "./UserDetailsCardSkeleton";

interface UserDetailsModalProps {
  open: boolean;
  onModalClose: () => void;
  onClose: () => void;
  userId: string;
}

export default function UserDetailsModal({
  open,
  onModalClose,
  onClose,
  userId,
}: UserDetailsModalProps) {
  const { data, isLoading } = useGetSingleUserQuery({ id: userId });

  const handleClose = () => {
    onModalClose();
    onClose();
  };

  return (
    <CustomModal open={open} onClose={onModalClose}>
      {/* Modal Title */}
      <Typography
        variant="h5"
        color="text.primary"
        fontWeight="bold"
        textAlign={"center"}
        sx={{ mb: 2 }}
      >
        User Details
      </Typography>

      {/* UserDetailsCard */}
      {isLoading ? (
        <UserDetailsCardSkeleton />
      ) : (
        <UserDetailsCard user={data} />
      )}

      {/* Close Button  */}

      <UserDetailCloseButton onClose={handleClose} />
    </CustomModal>
  );
}
