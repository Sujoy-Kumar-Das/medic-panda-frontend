import { Box, Container, Stack } from "@mui/material";
import UserInfoGrid from "./UserInfoGrid";
import UserInfoHeader from "./UserInfoHeader";

function UserInfoCompo({ data: user }: { data: any }) {
  return (
    <Container>
      <Stack direction="row" justifyContent="center" mt={3} mb={4}>
        <Box sx={{ width: "100%" }}>
          <UserInfoHeader user={user} />

          <UserInfoGrid user={user} />
        </Box>
      </Stack>
    </Container>
  );
}

export default UserInfoCompo;
