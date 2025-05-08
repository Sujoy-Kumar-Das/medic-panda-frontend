import CustomActionMenu, {
  IMenuItem,
} from "@/components/shared/custom-action-menu/CustomActionMenu";
import { USER_ROLE } from "@/constants/user.role";
import { useAuth } from "@/hooks/useAuth";
import useToggleState from "@/hooks/useToggleState";
import { KeyOff } from "@mui/icons-material";
import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import BlockUserModal from "../block-user-modal/BlockUserModal";
import DeleteUserModal from "../delete-user-modal/DeleteUserModal";
import UnblockUserModal from "../unblock-user-modal/UnblockUserModal";
import UserDetailsModal from "../user-details-modal/UserDetailsModal";

const UserActionMenu = ({
  id,
  isBlocked,
}: {
  id: string;
  isBlocked: boolean;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Using the custom hook for modal states
  const userDetailModal = useToggleState();
  const blockUserModal = useToggleState();
  const unblockUserModal = useToggleState();
  const deleteUserModal = useToggleState();

  const onClose = () => setAnchorEl(null);

  const blockHandler = () => {
    isBlocked ? unblockUserModal.onOpen() : blockUserModal.onOpen();
  };

  const { user } = useAuth();

  const isAccessible =
    user?.role.toUpperCase() === USER_ROLE.superAdmin.toUpperCase();

  return (
    <>
      <CustomActionMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        items={
          [
            {
              icon: <VisibilityIcon />,
              label: "Details",
              onClick: userDetailModal.onOpen,
            },
            isAccessible && {
              icon: isBlocked ? <KeyOff /> : <BlockIcon />,
              label: isBlocked ? `Unblock` : `Block`,
              onClick: blockHandler,
            },
            isAccessible && {
              icon: <DeleteIcon />,
              label: "Delete",
              onClick: deleteUserModal.onOpen,
            },
          ].filter(Boolean) as IMenuItem[]
        }
      />

      {/* Modals using useToggleState */}
      {userDetailModal.state && (
        <UserDetailsModal
          open={userDetailModal.state}
          onClose={onClose}
          userId={id}
          onModalClose={userDetailModal.onClose}
        />
      )}

      {deleteUserModal.state && (
        <DeleteUserModal
          open={deleteUserModal.state}
          onModalClose={deleteUserModal.onClose}
          userId={id}
          onClose={onClose}
        />
      )}

      {blockUserModal.state && (
        <BlockUserModal
          open={blockUserModal.state}
          onModalClose={blockUserModal.onClose}
          userId={id}
          onClose={onClose}
        />
      )}

      {unblockUserModal.state && (
        <UnblockUserModal
          open={unblockUserModal.state}
          onModalClose={unblockUserModal.onClose}
          userId={id}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default UserActionMenu;
