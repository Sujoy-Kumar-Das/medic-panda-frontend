import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import useActiveModal from "@/hooks/useActiveModal";
import useToggleState from "@/hooks/useToggleState";
import { ICategory } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import CategoryDetailsModal from "../modals/CategoryDetailsModal";
import CategoryDeleteModal from "../modals/CategoryDeleteModal";
import EditCategoryModal from "../modals/EditCategoryModal";

type TCategoryModalAction = "details" | "edit" | "delete";

export default function CategoryActionMenu({
  category,
}: {
  category: ICategory;
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const { nextModal, openModal, closeModal } =
    useActiveModal<TCategoryModalAction>();

  const handleOpenModal = (type: TCategoryModalAction) => {
    setAnchorEl(null);
    openModal(type);
  };

  const items = [
    {
      icon: <InfoIcon />,
      label: "Details",
      onClick: () => handleOpenModal("details"),
    },
    {
      icon: <EditIcon />,
      label: "Edit",
      onClick: () => handleOpenModal("edit"),
    },
    {
      icon: <DeleteIcon />,
      label: "Delete",
      onClick: () => handleOpenModal("delete"),
    },
  ];

  return (
    <>
      <CustomActionMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        items={items}
      />

      {nextModal("details") && (
        <CategoryDetailsModal onClose={closeModal} category={category} />
      )}

      {nextModal("edit") && (
        <EditCategoryModal onClose={closeModal} category={category} />
      )}

      {nextModal("delete") && (
        <CategoryDeleteModal onClose={closeModal} categoryId={category._id} />
      )}
    </>
  );
}
