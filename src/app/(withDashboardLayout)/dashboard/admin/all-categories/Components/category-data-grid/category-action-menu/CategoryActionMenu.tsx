import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import useToggleState from "@/hooks/useToggleState";
import { ICategory } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import CategoryDetailsModal from "../../category-details-modal/CategoryDetailsModal";
import CategoryDeleteModal from "../../category-modal-delete/CategoryDeleteModal";
import EditCategoryModal from "../../edit-category-modal/EditCategoryModal";

export default function CategoryActionMenu({
  category,
}: {
  category: ICategory;
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const detailsModal = useToggleState();
  const editModal = useToggleState();
  const deleteModal = useToggleState();

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const items = [
    {
      icon: <InfoIcon />,
      label: "Details",
      onClick: detailsModal.onOpen,
    },
    {
      icon: <EditIcon />,
      label: "Edit",
      onClick: editModal.onOpen,
    },
    {
      icon: <DeleteIcon />,
      label: "Delete",
      onClick: deleteModal.onOpen,
    },
  ];

  return (
    <>
      <CustomActionMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        items={items}
      />

      {detailsModal.state && (
        <CategoryDetailsModal
          open={detailsModal.state}
          onModalClose={detailsModal.onClose}
          onClose={handleMenuClose}
          category={category}
        />
      )}

      {editModal.state && (
        <EditCategoryModal
          open={editModal.state}
          onModalClose={editModal.onClose}
          onClose={handleMenuClose}
          category={category}
        />
      )}

      {deleteModal.state && (
        <CategoryDeleteModal
          open={deleteModal.state}
          onModalClose={deleteModal.onClose}
          onClose={handleMenuClose}
          categoryId={category._id}
        />
      )}
    </>
  );
}
