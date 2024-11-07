import { MenuItem } from "@mui/material";

interface FilterItemProps {
  value: string;
  title: string;
  onFilterChange: (filter: string) => void;
}

const FilterItem = ({ value, title, onFilterChange }: FilterItemProps) => {
  return (
    <MenuItem
      onClick={() => {
        onFilterChange(value);
      }}
      sx={{ textTransform: "capitalize" }}
    >
      {title}
    </MenuItem>
  );
};

export default FilterItem;
