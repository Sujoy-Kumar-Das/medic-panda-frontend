import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import { MouseEvent, useState } from "react";
export default function OpenActionMenuButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <IconButton onClick={handleClick} color="primary">
      <MoreVertIcon />
    </IconButton>
  );
}
