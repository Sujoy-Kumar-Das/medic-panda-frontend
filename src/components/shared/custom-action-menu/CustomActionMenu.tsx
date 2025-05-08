import randomUID from "@/utils/randomId";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, Stack } from "@mui/material";
import { Dispatch, MouseEvent, ReactElement, SetStateAction } from "react";
import CustomActionMenuItem from "./CustomActionMenuItem";

export interface IMenuItem {
  label: string;
  icon: ReactElement;
  onClick: () => void;
}

interface CustomActionMenuProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  items: IMenuItem[];
}

const CustomActionMenu = ({
  anchorEl,
  setAnchorEl,
  items,
}: CustomActionMenuProps) => {
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

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map((item) => (
          <CustomActionMenuItem
            label={item.label}
            icon={item.icon}
            onClick={item.onClick}
            key={randomUID()}
          />
        ))}
      </Menu>
    </Stack>
  );
};

export default CustomActionMenu;
