import DashboardHeaderWithFIlterAndSearchBar from "@/components/shared/dashboard-hearder-with-filter-and-searchbar/DashboardHeaderWithFIlterAndSearchBar";
import { IUserRoles } from "@/types/user.role.type";
import { Box } from "@mui/material";
import OpenAddAdminModalButton from "./modals/add-admin-modal/OpenAddAdminModalButton";
import {
  allUsersFilterItems,
  allUsersShortcutFilterItems,
} from "./all-users-filter-items";

function AllUsersHeader({ role }: { role: IUserRoles }) {
  const mainHeaderProps = {
    title: "User",
    subtitle: "Explore, Manage, and Track All Users",
    children: <>{role === "superAdmin" && <OpenAddAdminModalButton />}</>,
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
        searchbarOptions={{ query: "searchTerm" }}
      />
    </Box>
  );
}

export default AllUsersHeader;
