import EditIcon from "@mui/icons-material/Edit";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import DeleteProductMenuItem from "../../productDetailsModal/deleteProductModal/DeleteProductMenuItem";
import ProductDetailMenuItem from "../../productDetailsModal/ProductDetailMenuItem";

interface ProductActionMenuProps {
  onClose: () => void;
  anchorEl: HTMLElement | null;
  id: string;
  open: boolean;
}

export default function ProductActionMenu({
  onClose,
  anchorEl,
  id,
  open,
}: ProductActionMenuProps) {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      <ProductDetailMenuItem productId={id} onClose={onClose} />

      <MenuItem>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </MenuItem>

      <DeleteProductMenuItem productId={id} onClose={onClose} />
    </Menu>
  );
}
