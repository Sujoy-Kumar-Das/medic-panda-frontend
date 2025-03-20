import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import ManufacturerDetailsModal from "../../manufaturer-details-modal/ManufacturerDetailsModal";

export default function ManufacturerActionMenu({ manufacturer }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
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
            onClick: () => setIsDetailsOpen(true),
          },
          {
            icon: <EditIcon />,
            label: "Edit",
            onClick: () => setIsEditOpen(true),
          },
          {
            icon: <DeleteIcon color="error" />,
            label: "Delete",
            onClick: () => setIsDeleteOpen(true),
          },
        ]}
      />

      {isDetailsOpen && (
        <ManufacturerDetailsModal
          open={isDetailsOpen}
          setOpen={setIsDetailsOpen}
          onClose={handleClose}
        />
      )}

      {isEditOpen && (
        <ManufacturerDetailsModal
          open={isEditOpen}
          setOpen={setIsEditOpen}
          onClose={handleClose}
        />
      )}

      {isDeleteOpen && (
        <ManufacturerDetailsModal
          open={isDeleteOpen}
          setOpen={setIsDeleteOpen}
          onClose={handleClose}
        />
      )}
    </>
  );
}
