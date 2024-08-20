import SearchBar from "@/components/shared/searchBar/SearchBar";
import { Box, Button, Container, Stack } from "@mui/material";

export default function BlockedUsersPage() {
  return (
    <Container>
      <Box bgcolor={"background.paper"} p={3} borderRadius={1}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <SearchBar />
          <Button>ADD User</Button>
        </Stack>
      </Box>
    </Container>
  );
}
