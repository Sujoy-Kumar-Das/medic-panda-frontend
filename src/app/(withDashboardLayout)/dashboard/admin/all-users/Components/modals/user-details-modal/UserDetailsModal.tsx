import CustomModal from "@/components/modal/customModal/CustomModal";
import { useGetSingleUserQuery } from "@/redux/api";
import UserDetailCloseButton from "./UserDetailCloseButton";
import UserDetailsCard from "./UserDetailsCard";
import UserDetailsCardSkeleton from "./UserDetailsCardSkeleton";

interface UserDetailsModalProps {
  open: boolean;
  onModalClose: () => void;
  userId: string;
}

export default function UserDetailsModal({
  open,
  onModalClose,
  userId,
}: UserDetailsModalProps) {
  const { data, isLoading } = useGetSingleUserQuery({ id: userId });

  return (
    <CustomModal open={open} onClose={onModalClose}>
      {/* UserDetailsCard */}
      {isLoading ? (
        <UserDetailsCardSkeleton />
      ) : (
        <UserDetailsCard user={data} />
      )}

      {/* Close Button  */}

      <UserDetailCloseButton onClose={onModalClose} />
    </CustomModal>
  );
}
