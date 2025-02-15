import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import shortcutFilterItemsData from "@/data/filter-item/all-users-shortcut-filter-items-data";
import { Box } from "@mui/material";
import OpenAddAdminModalButton from "./add-admin-modal/OpenAddAdminModalButton";
import { allUsersFilterItemsData } from "./allUsersFilterItemsData";
function AllUsersHeader() {
  const mainHeaderProps = {
    title: "User",
    subtitle: "Explore, Manage, and Track All Users",
    children: <OpenAddAdminModalButton />,
  };

  const allFilterProps = {
    items: allUsersFilterItemsData,
  };
  return (
    <Box>
      <DashboardHeaderWithFIlterAndSearchBar
        mainHeaderOptions={mainHeaderProps}
        shortcutFilterOptions={{ items: shortcutFilterItemsData }}
        allFilterOptions={allFilterProps}
        searchbarOptions={{ query: "email" }}
      />
    </Box>
  );
}

export default AllUsersHeader;
