import { Stack } from "@mui/material";
import AllUsersFilterButtons from "./AllUsersFilterButtons";
import AllUsersFilterItems from "./AllUsersFilterItems";
import AllUsersSearchBar from "./AllUsersSearchBar";

export default function AllUsersFilterSection() {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <AllUsersFilterButtons />
      <Stack
        direction={"row"}
        alignItems={"center"}
        py={2}
        borderRadius={1}
        gap={2}
      >
        <AllUsersSearchBar />
        <AllUsersFilterItems />
      </Stack>
    </Stack>
  );
}
