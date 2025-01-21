import { MenuItem, Select, SelectChangeEvent, SxProps } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface IFilterItem {
  id: number;
  title: string;
  value: string | boolean;
  query: string;
}

export default function FilterCompo({
  placeholder,
  items,
  sx,
}: {
  placeholder?: string;
  items: IFilterItem[];
  sx?: SxProps;
}) {
  const [selectedItem, setSelectedItem] = useState<IFilterItem | null>(null);

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  //   handle filter users
  const filteredDataHandler = (event: SelectChangeEvent<string | number>) => {
    const selectedId = event.target.value;

    if (!selectedId) {
      setSelectedItem(null);
      // Clear the query from URL
      const params = new URLSearchParams(searchParams.toString());

      // Remove all possible filters
      items.forEach((item) => params.delete(item.query));

      replace(pathName);
      return;
    }

    const filteredItem = items.find((item) => item.id === Number(selectedId));
    setSelectedItem(filteredItem || null);

    if (filteredItem) {
      const { query, value } = filteredItem;
      const params = new URLSearchParams(searchParams.toString());
      params.set(query, String(value));
      replace(`${pathName}?${params.toString()}`);
    }
  };

  return (
    <Select
      value={selectedItem?.id || ""}
      onChange={filteredDataHandler}
      sx={{ ...sx }}
      displayEmpty
      renderValue={(selected) => {
        if (!selected) return "Select a filter";
        const selectedItem = items.find((item) => item.id === selected);
        return selectedItem ? selectedItem.title : "Select a filter";
      }}
    >
      <MenuItem value="" disabled sx={{ bgcolor: "inherit" }}>
        {placeholder || "Select A Item"}
      </MenuItem>
      {items.map((item) => (
        <MenuItem key={item.id} value={item.id} sx={{ bgcolor: "inherit" }}>
          {item.title}
        </MenuItem>
      ))}
    </Select>
  );
}
