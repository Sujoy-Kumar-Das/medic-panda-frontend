import { useAuth } from "@/hooks/useAuth";
import { IMeta } from "@/types";
import { IUserRoles } from "@/types/user.role.type";
import { Box, Container } from "@mui/material";
import AllUsersHeader from "./AllUsersHeader";
import AllUsersDataGrid from "./data-grid/AllUsersDataGrid";

const AllUsersCompo = ({
  data,
  isLoading,
  isError,
}: {
  data: { meta: IMeta; data: any[] };
  isLoading: boolean;
  isError: boolean;
}) => {
  const { user } = useAuth();
  return (
    <Container>
      <AllUsersHeader role={user?.role as IUserRoles} />

      <Box sx={{ mt: 3, overflow: "auto" }}>
        <AllUsersDataGrid
          users={data?.data}
          isLoading={isLoading}
          isError={isError}
        />
      </Box>
    </Container>
  );
};

export default AllUsersCompo;
