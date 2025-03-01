import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import OpenProductDetailsModalButton from "../../productDetailsModal/OpenProductDetailsModalButton";

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
      <OpenProductDetailsModalButton productId={id} onCloseMenu={onClose} />

      <MenuItem
        onClick={() => {
          onClose();
        }}
      >
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </MenuItem>
      <MenuItem
        onClick={() => {
          onClose();
        }}
        sx={{ color: "red" }}
      >
        <ListItemIcon>
          <DeleteIcon color="error" />
        </ListItemIcon>
        <ListItemText primary="Delete" />
      </MenuItem>
    </Menu>
  );
}
