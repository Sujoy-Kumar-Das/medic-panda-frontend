import { Container } from "@mui/material";
import AllUsersDataGrid from "./AllUsersDataGrid";
import AllUsersHeader from "./AllUsersHeader";

const AllUsersCompo = ({ data }: { data: [] }) => {
  return (
    <Container>
      <AllUsersHeader />
      <AllUsersDataGrid users={data} />
    </Container>
  );
};

export default AllUsersCompo;
