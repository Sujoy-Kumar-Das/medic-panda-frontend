import { IFilterItem } from "@/types/filter-item";
import isActivePath from "@/utils/isActivePath";
import { Button, Stack } from "@mui/material";
import useShortcutFilterButton from "./useShortcutFilterButton";

interface ShortcutFIlterButtonsProps {
  filterItems: IFilterItem[];
}

export default function ShortcutFIlterButtons({
  filterItems,
}: ShortcutFIlterButtonsProps) {
  const { filterHandler, searchParams } = useShortcutFilterButton({
    filterItems,
  });

  // todo opurtunity for optimize performance with decrease the event handler using one event handler
  return (
    <Stack direction="row" alignItems="center" gap={2}>
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
            boxShadow: "none",
            borderRadius: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: isActivePath({ item, searchParams })
                ? "primary.dark"
                : "background.paper",
              boxShadow: "none",
            },
          }}
          onClick={() => filterHandler(item)}
        >
          {item.title}
        </Button>
      ))}
    </Stack>
  );
}
