"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useState } from "react";
import ProductDetailsModal from "./ProductDetailsModal";

interface OpenProductDetailsModalButtonProps {
  productId: string;
  onCloseMenu: () => void;
}

export default function OpenProductDetailsModalButton({
  productId,
  onCloseMenu,
}: OpenProductDetailsModalButtonProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleProductDetailsModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <MenuItem onClick={handleProductDetailsModal}>
        <ListItemIcon>
          <VisibilityIcon />
        </ListItemIcon>
        <ListItemText primary="Details" />
      </MenuItem>

      <ProductDetailsModal
        open={openModal}
        setOpen={setOpenModal}
        productId={productId}
        onCloseMenu={onCloseMenu}
      />
    </>
  );
}
