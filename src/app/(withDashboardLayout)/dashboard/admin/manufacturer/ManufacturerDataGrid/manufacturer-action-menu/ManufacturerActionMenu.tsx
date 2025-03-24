import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import useToggleState from "@/hooks/useToggleState";
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

  const detailsModal = useToggleState();
  const editModal = useToggleState();
  const deleteModal = useToggleState();

  const handleCloseActionMenu = () => {
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
            onClick: detailsModal.onOpen,
          },
          {
            icon: <EditIcon />,
            label: "Edit",
            onClick: editModal.onOpen,
          },
          {
            icon: <DeleteIcon color="error" />,
            label: "Delete",
            onClick: deleteModal.onOpen,
          },
        ]}
      />

      {detailsModal.state && (
        <ManufacturerDetailsModal
          open={detailsModal.state}
          onModalClose={detailsModal.onClose}
          onClose={handleCloseActionMenu}
          manufacturer={manufacturer}
        />
      )}

      {editModal.state && (
        <ManufacturerEditModal
          open={editModal.state}
          onModalClose={editModal.onClose}
          onClose={handleCloseActionMenu}
          manufacturer={manufacturer}
        />
      )}

      {deleteModal && (
        <ManufacturerDeleteModal
          open={deleteModal.state}
          onModalClose={deleteModal.onClose}
          onClose={handleCloseActionMenu}
          id={manufacturer._id}
        />
      )}
    </>
  );
}
