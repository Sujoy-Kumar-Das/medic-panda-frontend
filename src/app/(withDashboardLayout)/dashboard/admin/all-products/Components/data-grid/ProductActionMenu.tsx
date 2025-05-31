import CustomActionMenu from "@/components/shared/custom-action-menu/CustomActionMenu";
import useActiveModal from "@/hooks/useActiveModal";
import { TProductActionModalType } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import DeleteProductModal from "../modals/DeleteProductModal";
import ProductDetailsModal from "../modals/details/ProductDetailsModal";
import EditProductModal from "../modals/EditProductModal";

const ProductActionMenu = ({ id }: { id: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { nextModal, openModal, closeModal } =
    useActiveModal<TProductActionModalType>();

  const handleOpenModal = (type: TProductActionModalType) => {
    openModal(type);
    setAnchorEl(null);
  };

  const productItemsArray = [
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
        items={productItemsArray}
      />

      {nextModal("details") && (
        <ProductDetailsModal productId={id} onModalClose={closeModal} />
      )}

      {nextModal("edit") && (
        <EditProductModal productId={id} onModalClose={closeModal} />
      )}

      {nextModal("delete") && (
        <DeleteProductModal productId={id} onModalClose={closeModal} />
      )}
    </>
  );
};

export default ProductActionMenu;
