import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Stack } from "@mui/material";
import { MouseEvent, useState } from "react";
import ProductActionMenu from "./ProductActionMenus";

const OpenProductActionMenuButton = ({ id }: { id: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      py={1}
    >
      <IconButton onClick={handleClick} color="primary">
        <MoreVertIcon />
      </IconButton>

      {/* product action items */}
      <ProductActionMenu
        onClose={handleClose}
        anchorEl={anchorEl}
        id={id}
        open={open}
      />
    </Stack>
  );
};

export default OpenProductActionMenuButton;
