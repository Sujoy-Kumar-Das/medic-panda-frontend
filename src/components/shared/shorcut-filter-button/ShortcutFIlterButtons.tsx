import useFilter from "@/hooks/useFilter";
import { IFilterItem } from "@/types/filter-item";
import isActivePath from "@/utils/isActivePath";
import { Button, Stack } from "@mui/material";

interface ShortcutFIlterButtonsProps {
  filterItems: IFilterItem[];
}

export default function ShortcutFIlterButtons({
  filterItems,
}: ShortcutFIlterButtonsProps) {
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
      {filterItems.map((item) => (
        <Button
          size="small"
          key={item.id}
          sx={{
            bgcolor: isActivePath({ item, searchParams })
              ? "primary.main"
              : "background.default",
            color: isActivePath({ item, searchParams })
              ? "white"
              : "text.primary",
            borderRadius: 2,
            textTransform: "none",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            px: 2,
            "&:hover": {
              bgcolor: isActivePath({ item, searchParams })
                ? "primary.dark"
                : "background.paper",
            },
          }}
          onClick={() => applyFilter(item)}
        >
          {item.title}
        </Button>
      ))}
    </Stack>
  );
}
