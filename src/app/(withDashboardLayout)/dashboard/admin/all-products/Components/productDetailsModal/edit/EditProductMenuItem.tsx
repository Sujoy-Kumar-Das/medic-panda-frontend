import EditIcon from "@mui/icons-material/Edit";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useState } from "react";
import EditProductModal from "./EditProductModal";
export default function EditProductMenuItem({ onClose, productId }) {
  const [openModal, setOpenModal] = useState(false);

  const handleEditModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <>
      <MenuItem onClick={handleEditModal}>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </MenuItem>

      <EditProductModal
        open={openModal}
        setOpen={setOpenModal}
        onClose={onClose}
        productId={productId}
      />
    </>
  );
}
