"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useState } from "react";
import ProductDetailsModal from "./ProductDetailsModal";

interface ProductDetailMenuItemProps {
  productId: string;
  onClose: () => void;
}

export default function ProductDetailMenuItem({
  productId,
  onClose,
}: ProductDetailMenuItemProps) {
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

      {/* product details modal */}
      <ProductDetailsModal
        open={openModal}
        setOpen={setOpenModal}
        productId={productId}
        onClose={onClose}
      />
    </>
  );
}
