import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DeleteUserModal from "../delete-user-modal/DeleteUserModal";

const UserActionMenu = ({ id }: { id: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomActionMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        items={[
          {
            icon: <DeleteIcon />,
            label: "Delete",
            onClick: () => setIsDeleteOpen(true),
          },
        ]}
      />

      <DeleteUserModal
        open={isDeleteOpen}
        setOpen={setIsDeleteOpen}
        userId={id}
        onClose={onClose}
      />
    </>
  );
};

export default UserActionMenu;
