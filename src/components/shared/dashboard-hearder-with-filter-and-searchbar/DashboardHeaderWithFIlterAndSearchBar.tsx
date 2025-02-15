import { Stack } from "@mui/material";
import { IDashboardHeaderWithFIlterAndSearchBar } from "./dashboard.header.type";
import DashboardMainHeader from "./DashboardMainHeader";
import DashboardSearchFilter from "./DashboardSearchFilter";
import DashboardShortcutFilter from "./DashboardShortcutFilter";

export default function DashboardHeaderWithFIlterAndSearchBar({
  mainHeaderOptions,
  searchbarOptions,
  shortcutFilterOptions,
  allFilterOptions,
}: IDashboardHeaderWithFIlterAndSearchBar) {
  return (
    <>
      <DashboardMainHeader {...mainHeaderOptions} />

      <Stack direction={"row"} justifyContent={"space-between"}>
        <DashboardShortcutFilter items={shortcutFilterOptions.items} />

        <DashboardSearchFilter
          allFilterOptions={allFilterOptions}
          searchbarOptions={searchbarOptions}
        />
      </Stack>
    </>
  );
}
