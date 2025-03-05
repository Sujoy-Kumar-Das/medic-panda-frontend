import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
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

  const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false);
  const [isBlockOpen, setIsBlockOpen] = useState(false);
  const [isUnBlockOpen, setIsUnBlockOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const onClose = () => {
    setAnchorEl(null);
  };

  const blockHandler = () => {
    isBlocked ? setIsUnBlockOpen(true) : setIsBlockOpen(true);
  };

  return (
    <>
      <CustomActionMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        items={[
          {
            icon: <VisibilityIcon />,
            label: "Details",
            onClick: () => setIsUserDetailsOpen(true),
          },
          {
            icon: isBlocked ? <KeyOff /> : <BlockIcon />,
            label: isBlocked ? `UnBlock` : `Block`,
            onClick: blockHandler,
          },
          {
            icon: <DeleteIcon />,
            label: "Delete",
            onClick: () => setIsDeleteOpen(true),
          },
        ]}
      />

      <UserDetailsModal
        open={isUserDetailsOpen}
        setOpen={setIsUserDetailsOpen}
        userId={id}
        onClose={onClose}
      />

      <DeleteUserModal
        open={isDeleteOpen}
        setOpen={setIsDeleteOpen}
        userId={id}
        onClose={onClose}
      />

      <BlockUserModal
        open={isBlockOpen}
        setOpen={setIsBlockOpen}
        userId={id}
        onClose={onClose}
      />

      <UnblockUserModal
        open={isUnBlockOpen}
        setOpen={setIsUnBlockOpen}
        userId={id}
        onClose={onClose}
      />
    </>
  );
};

export default UserActionMenu;
