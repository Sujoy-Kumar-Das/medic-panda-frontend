import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { ReactElement } from "react";

interface CustomActionMenuItemProps {
  icon: ReactElement;
  label: string;
  onClick: () => void;
}

export default function CustomActionMenuItem({
  icon,
  label,
  onClick,
}: CustomActionMenuItemProps) {
  return (
    <MenuItem onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </MenuItem>
  );
}
