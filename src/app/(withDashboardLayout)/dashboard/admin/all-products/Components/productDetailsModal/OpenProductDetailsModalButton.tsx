"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useState } from "react";
import ProductDetailsModal from "./ProductDetailsModal";

export default function OpenProductDetailsModalButton({ productId }) {
  const [open, setOpen] = useState(false);

  const handleProductDetailsModal = () => {
    setOpen((prev) => !prev);
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
        open={open}
        setOpen={setOpen}
        productId={productId}
      />
    </>
  );
}
