import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import useActiveModal from "@/hooks/useActiveModal";
import { IManufacturer } from "@/types/Imanufacturer.type";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import ManufacturerDeleteModal from "../modals/ManufacturerDeleteModal";
import ManufacturerDetailsModal from "../modals/ManufacturerDetailsModal";
import ManufacturerEditModal from "../modals/ManufacturerEditModal";

interface ManufacturerActionMenuProps {
  manufacturer: IManufacturer;
}

type TManufacturerActionType = "details" | "edit" | "delete";

export default function ManufacturerActionMenu({
  manufacturer,
}: ManufacturerActionMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { openModal, nextModal, closeModal } =
    useActiveModal<TManufacturerActionType>();

  const handleOpenModal = (type: TManufacturerActionType) => {
    openModal(type);
    setAnchorEl(null);
  };

  const manufacturerActionItems = [
    {
      icon: <VisibilityIcon />,
      label: "Details",
      onClick: () => handleOpenModal("details"),
    },
    {
      icon: <EditIcon />,
      label: "Edit",
      onClick: () => handleOpenModal("edit"),
    },
    {
      icon: <DeleteIcon color="error" />,
      label: "Delete",
      onClick: () => handleOpenModal("delete"),
    },
  ];

  return (
    <>
      <CustomActionMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        items={manufacturerActionItems}
      />

      {nextModal("details") && (
        <ManufacturerDetailsModal
          onClose={closeModal}
          manufacturer={manufacturer}
        />
      )}

      {nextModal("edit") && (
        <ManufacturerEditModal
          onClose={closeModal}
          manufacturer={manufacturer}
        />
      )}

      {nextModal("delete") && (
        <ManufacturerDeleteModal onClose={closeModal} id={manufacturer._id} />
      )}
    </>
  );
}
