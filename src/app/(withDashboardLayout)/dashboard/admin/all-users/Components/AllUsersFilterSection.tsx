import ShortcutFIlterButtons from "@/components/shared/shorcut-filter-button/ShortcutFIlterButtons";
import shortcutFilterItemsData from "@/data/filter-item/all-users-shortcut-filter-items-data";
import { Stack } from "@mui/material";
import AllUsersFilterItems from "./AllUsersFilterItems";
import AllUsersSearchBar from "./AllUsersSearchBar";

export default function AllUsersFilterSection() {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <ShortcutFIlterButtons filterItems={shortcutFilterItemsData} />
      <Stack
        direction={"row"}
        alignItems={"center"}
        py={2}
        borderRadius={1}
        gap={2}
      >
        <AllUsersSearchBar />
        <AllUsersFilterItems />
      </Stack>
    </Stack>
  );
}
