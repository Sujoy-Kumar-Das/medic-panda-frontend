import { IMeta } from "@/types";
import { IUserData } from "@/types/user.type";
import { Container } from "@mui/material";
import AllUsersDataGrid from "./AllUsersDataGrid";
import AllUsersHeader from "./AllUsersHeader";
import AllUsersSearchResultHeader from "./AllUsersSearchResultHeader";

const AllUsersCompo = ({
  data,
}: {
  data: { meta: IMeta; data: IUserData[] };
}) => {
  return (
    <Container>
      <AllUsersHeader />
      <AllUsersSearchResultHeader />
      <AllUsersDataGrid users={data?.data} />
    </Container>
  );
};

export default AllUsersCompo;
