import CustomModal from "@/components/modal/customModal/CustomModal";
import { useGetSingleUserQuery } from "@/redux/api/user.api";
import { Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import UserDetailCloseButton from "./UserDetailCloseButton";
import UserDetailsCard from "./UserDetailsCard";
import UserDetailsCardSkeleton from "./UserDetailsCardSkeleton";

interface UserDetailsModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
  userId: string;
}

export default function UserDetailsModal({
  open,
  setOpen,
  onClose,
  userId,
}: UserDetailsModalProps) {
  const { data, isLoading } = useGetSingleUserQuery({ id: userId });

  const handleClose = () => {
    setOpen((prev) => !prev);
    onClose();
  };
  return (
    <CustomModal open={open} setOpen={setOpen}>
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
