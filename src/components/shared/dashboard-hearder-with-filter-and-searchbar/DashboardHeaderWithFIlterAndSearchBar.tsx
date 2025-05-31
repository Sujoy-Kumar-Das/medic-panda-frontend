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

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        spacing={{ xs: 2, sm: 3 }}
        sx={{ width: "100%", mt: 2 }}
      >
        <DashboardShortcutFilter items={shortcutFilterOptions.items} />

        <DashboardSearchFilter
          allFilterOptions={allFilterOptions}
          searchbarOptions={searchbarOptions}
        />
      </Stack>
    </>
  );
}
