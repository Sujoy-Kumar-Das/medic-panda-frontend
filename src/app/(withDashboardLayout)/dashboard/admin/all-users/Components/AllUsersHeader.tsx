import Header from "@/components/shared/header/Header";
import { Box } from "@mui/material";
import AddUser from "./add-user/AddUser";
import AllUsersFilterSection from "./AllUsersFilterSection";
function AllUsersHeader() {
  return (
    <Box>
      <Header
        title="User's"
        subtitle="Explore, Manage, and Track All Users"
        action={<AddUser />}
      />
      <AllUsersFilterSection />
    </Box>
  );
}

export default AllUsersHeader;
