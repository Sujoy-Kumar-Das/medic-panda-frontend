import { Container } from "@mui/material";
import AllUsersDataGrid from "./AllUsersDataGrid";
import AllUsersHeader from "./AllUsersHeader";
import AllUsersSearchResultHeader from "./AllUsersSearchResultHeader";

const AllUsersCompo = ({ data }: { data: [] }) => {
  return (
    <Container>
      <AllUsersHeader />
      <AllUsersSearchResultHeader />
      <AllUsersDataGrid users={data} />
    </Container>
  );
};

export default AllUsersCompo;
