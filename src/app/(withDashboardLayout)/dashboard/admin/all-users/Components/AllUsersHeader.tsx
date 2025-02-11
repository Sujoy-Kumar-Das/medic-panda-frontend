import Header from "@/components/shared/header/Header";
import { Box } from "@mui/material";
import OpenAddAdminModalButton from "./add-admin-modal/OpenAddAdminModalButton";
import AllUsersFilterSection from "./AllUsersFilterSection";
function AllUsersHeader() {
  return (
    <Box>
      <Header title="User's" subtitle="Explore, Manage, and Track All Users">
        <OpenAddAdminModalButton />
      </Header>
      <AllUsersFilterSection />
    </Box>
  );
}

export default AllUsersHeader;
