import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import OpenDeleteUserModalButton from "../delete-user-modal/OpenDeleteUserModalButton";

const UserActionMenu = ({ id }: { id: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

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

      <OpenDeleteUserModalButton
        open={isDeleteOpen}
        setOpen={setIsDeleteOpen}
        userId={id}
      />
    </>
  );
};

export default UserActionMenu;
