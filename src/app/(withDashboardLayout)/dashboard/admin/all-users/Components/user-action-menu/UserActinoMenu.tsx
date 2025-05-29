import CustomActionMenu, {
  IMenuItem,
} from "@/components/shared/custom-action-menu/CustomActionMenu";
import { USER_ROLE } from "@/constants/user.role";
import useActiveModal from "@/hooks/useActiveModal";
import { useAuth } from "@/hooks/useAuth";
import { TUserActionModalType } from "@/types";
import { KeyOff } from "@mui/icons-material";
import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import BlockUserModal from "../modals/BlockUserModal";
import DeleteUserModal from "../modals/DeleteUserModal";
import UnblockUserModal from "../modals/UnblockUserModal";
import UserDetailsModal from "../modals/user-details-modal/UserDetailsModal";

const UserActionMenu = ({
  id,
  isBlocked,
}: {
  id: string;
  isBlocked: boolean;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // useAction modal for manage modal states
  const { openModal, closeModal, nextModal } =
    useActiveModal<TUserActionModalType>();

  // calculate is the user is supper admin or not
  const { user } = useAuth();

  const isSupperAdmin =
    user?.role.toUpperCase() === USER_ROLE.superAdmin.toUpperCase();

  // handle open modal and close the menu items
  const handleOpenModal = (type: TUserActionModalType) => {
    openModal(type);
    setAnchorEl(null);
  };

  // users action menu items array
  const userMenuItems = [
    {
      icon: <VisibilityIcon />,
      label: "Details",
      onClick: () => handleOpenModal("details"),
    },
    isSupperAdmin && {
      icon: isBlocked ? <KeyOff /> : <BlockIcon />,
      label: isBlocked ? `Unblock` : `Block`,
      onClick: () => handleOpenModal(isBlocked ? "unblock" : "block"),
    },
    isSupperAdmin && {
      icon: <DeleteIcon />,
      label: "Delete",
      onClick: () => handleOpenModal("delete"),
    },
  ].filter(Boolean) as IMenuItem[];

  return (
    <>
      <CustomActionMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        items={userMenuItems}
      />

      {/* Modals using useToggleState */}
      {nextModal("details") && (
        <UserDetailsModal open userId={id} onModalClose={closeModal} />
      )}

      {nextModal("delete") && (
        <DeleteUserModal open onModalClose={closeModal} userId={id} />
      )}

      {nextModal("block") && (
        <BlockUserModal open onModalClose={closeModal} userId={id} />
      )}

      {nextModal("unblock") && (
        <UnblockUserModal open onModalClose={closeModal} userId={id} />
      )}
    </>
  );
};

export default UserActionMenu;
