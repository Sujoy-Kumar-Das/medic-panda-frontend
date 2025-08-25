import useFilter from "@/hooks/useFilter";
import { IFilterItem } from "@/types/filter-item";
import isActivePath from "@/utils/isActivePath";
import { Button, Stack } from "@mui/material";

interface ShortcutFilterButtonsProps {
  filterItems: IFilterItem[];
}

export default function ShortcutFilterButtons({
  filterItems,
}: ShortcutFilterButtonsProps) {
  const { applyFilter, searchParams } = useFilter({
    filterItems,
  });

  return (
    <Stack
      direction="row"
      alignItems="center"
      flexWrap="wrap"
      rowGap={1}
      columnGap={1}
      sx={{ width: "100%", flex: 1 }}
    >
      {filterItems.map((item) => {
        const active = isActivePath({ item, searchParams });

        return (
          <Button
            size="small"
            key={item.id}
            variant={active ? "contained" : "outlined"}
            color={active ? "primary" : "inherit"}
            onClick={() => applyFilter(item)}
          >
            {item.title}
          </Button>
        );
      })}
    </Stack>
  );
}
