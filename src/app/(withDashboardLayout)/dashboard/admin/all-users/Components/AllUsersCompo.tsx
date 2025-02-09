import { Container, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import AllUsersDataGrid from "./AllUsersDataGrid";
import AllUsersHeader from "./AllUsersHeader";

const AllUsersCompo = ({ data }: { data: [] }) => {
  const searchParams = useSearchParams();

  const userEmail = searchParams.get("email");
  return (
    <Container>
      <AllUsersHeader />
      {userEmail && (
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            p: 2,
            bgcolor: "primary.light",
            color: "primary.contrastText",
            borderRadius: 2,
            boxShadow: 2,
            fontWeight: 500,
            textAlign: "center",
            mb: 2,
          }}
        >
          🔍 Search Result for <strong>{userEmail}</strong>
        </Typography>
      )}

      <AllUsersDataGrid users={data} />
    </Container>
  );
};

export default AllUsersCompo;
