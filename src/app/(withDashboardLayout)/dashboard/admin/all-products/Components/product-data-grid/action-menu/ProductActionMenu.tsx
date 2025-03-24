import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import useToggleState from "@/hooks/useToggleState";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import DeleteProductModal from "../../productDetailsModal/delete/DeleteProductModal";
import ProductDetailsModal from "../../productDetailsModal/details/ProductDetailsModal";
import EditProductModal from "../../productDetailsModal/edit/EditProductModal";

const ProductActionMenu = ({ id }: { id: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const detailsModal = useToggleState();
  const editModal = useToggleState();
  const deleteModal = useToggleState();

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
        <ProductDetailsModal
          productId={id}
          open={detailsModal.state}
          onModalClose={detailsModal.onClose}
          onClose={handleClose}
        />
      )}

      {editModal.state && (
        <EditProductModal
          productId={id}
          open={editModal.state}
          onModalClose={editModal.onClose}
          onClose={handleClose}
        />
      )}

      {deleteModal.state && (
        <DeleteProductModal
          productId={id}
          open={deleteModal.state}
          onModalClose={deleteModal.onClose}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default ProductActionMenu;
