import useFilter from "@/hooks/useFilter";
import { IFilterItem } from "@/types/filter-item";
import { MenuItem, Select, SelectChangeEvent, SxProps } from "@mui/material";
import { ReactNode, useState } from "react";

export default function FilterCompo({
  placeholder,
  items,
  sx,
}: {
  placeholder?: string | ReactNode;
  items: IFilterItem[];
  sx?: SxProps;
}) {
  const [selectedItem, setSelectedItem] = useState<IFilterItem | null>(null);

  const { applyFilter } = useFilter({ filterItems: items });

  //   handle filter users
  const filteredDataHandler = (event: SelectChangeEvent<string | number>) => {
    const selectedId = event.target.value;

    const filteredItem =
      items.find((item) => item.id === String(selectedId)) || null;

    setSelectedItem(filteredItem);
    applyFilter(filteredItem);
  };

  return (
    <Select
      value={selectedItem?.id || ""}
      onChange={filteredDataHandler}
      sx={{
        ...sx,
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
      displayEmpty
      renderValue={(selected) => {
        if (!selected) return placeholder || "Select A Item";
        const selectedItem = items.find((item) => item.id === selected);
        return selectedItem ? selectedItem.title : "Select a filter";
      }}
    >
      {items.map((item) => (
        <MenuItem key={item.id} value={item.id} sx={{ bgcolor: "inherit" }}>
          {item.title}
        </MenuItem>
      ))}
    </Select>
  );
}
