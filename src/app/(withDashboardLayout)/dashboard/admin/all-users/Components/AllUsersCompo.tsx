import { useAuth } from "@/hooks/useAuth";
import { IMeta } from "@/types";
import { IUserRoles } from "@/types/user.role.type";
import { Container } from "@mui/material";
import AllUsersDataGrid from "./AllUsersDataGrid";
import AllUsersHeader from "./AllUsersHeader";

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
      <AllUsersDataGrid
        users={data?.data}
        isLoading={isLoading}
        isError={isError}
      />
    </Container>
  );
};

export default AllUsersCompo;
