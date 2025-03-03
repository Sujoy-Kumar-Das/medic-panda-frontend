import DeleteIcon from "@mui/icons-material/Delete";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useState } from "react";
import DeleteProductModal from "./DeleteProductModal";
export default function DeleteProductMenuItem({
  onClose,
  productId,
}: {
  onClose: () => void;
  productId: string;
}) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleDeleteModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <MenuItem onClick={handleDeleteModal}>
        <ListItemIcon>
          <DeleteIcon color="error" />
        </ListItemIcon>
        <ListItemText primary="Delete" />
      </MenuItem>

      <DeleteProductModal
        open={openModal}
        setOpen={setOpenModal}
        productId={productId}
        onClose={onClose}
      />
    </>
  );
}
