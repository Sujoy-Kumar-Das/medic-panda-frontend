import { useAuth } from "@/hooks/useAuth";
import { IMeta } from "@/types";
import { IUserData } from "@/types/user.type";
import { Container } from "@mui/material";
import AllUsersDataGrid from "./AllUsersDataGrid";
import AllUsersHeader from "./AllUsersHeader";
import AllUsersSearchResultHeader from "./AllUsersSearchResultHeader";

const AllUsersCompo = ({
  data,
  isLoading,
  isError,
}: {
  data: { meta: IMeta; data: IUserData[] };
  isLoading: boolean;
  isError: boolean;
}) => {
  const { user } = useAuth();
  return (
    <Container>
      <AllUsersHeader role={user?.role} />
      <AllUsersSearchResultHeader />
      <AllUsersDataGrid
        users={data?.data}
        isLoading={isLoading}
        isError={isError}
      />
    </Container>
  );
};

export default AllUsersCompo;
