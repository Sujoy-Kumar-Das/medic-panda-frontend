import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import { IManufacturer } from "@/types/Imanufacturer.type";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import ManufacturerDeleteModal from "../../manufacturer-delete-modal/ManufacturerDeleteModal";
import ManufacturerDetailsModal from "../../manufaturer-details-modal/ManufacturerDetailsModal";
import ManufacturerEditModal from "../../manufaturer-edit-modal/ManufacturerEditModal";

interface ManufacturerActionMenuProps {
  manufacturer: IManufacturer;
}

export default function ManufacturerActionMenu({
  manufacturer,
}: ManufacturerActionMenuProps) {
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
          manufacturer={manufacturer}
        />
      )}

      {isEditOpen && (
        <ManufacturerEditModal
          open={isEditOpen}
          setOpen={setIsEditOpen}
          onClose={handleClose}
          manufacturer={manufacturer}
        />
      )}

      {isDeleteOpen && (
        <ManufacturerDeleteModal
          open={isDeleteOpen}
          setOpen={setIsDeleteOpen}
          onClose={handleClose}
          id={manufacturer._id}
        />
      )}
    </>
  );
}
