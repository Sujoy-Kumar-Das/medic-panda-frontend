import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import { Box } from "@mui/material";
import OpenAddAdminModalButton from "./add-admin-modal/OpenAddAdminModalButton";
import {
  allUsersFilterItems,
  allUsersShortcutFilterItems,
} from "./all-users-filter-items";
function AllUsersHeader() {
  const mainHeaderProps = {
    title: "User",
    subtitle: "Explore, Manage, and Track All Users",
    children: <OpenAddAdminModalButton />,
  };

  const allFilterProps = {
    items: allUsersFilterItems,
  };
  return (
    <Box>
      <DashboardHeaderWithFIlterAndSearchBar
        mainHeaderOptions={mainHeaderProps}
        shortcutFilterOptions={{ items: allUsersShortcutFilterItems }}
        allFilterOptions={allFilterProps}
        searchbarOptions={{ query: "email" }}
      />
    </Box>
  );
}

export default AllUsersHeader;
