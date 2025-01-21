import FilterCompo from "@/components/shared/filter/FilterCompo";
import SearchBar from "@/components/shared/searchBar/SearchBar";
import { Stack } from "@mui/material";
import { filterItemsData } from "./filterItems";
function AllUsersHeader() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      py={2}
      borderRadius={1}
    >
      <SearchBar
        query="email"
        placeholder="Search With Email...."
        sxProps={{ width: 300, height: 60 }}
      />
      <FilterCompo
        items={filterItemsData}
        sx={{
          width: 200,
          height: 60,
          border: "none",
          bgcolor: "background.default",
        }}
      />
    </Stack>
  );
}

export default AllUsersHeader;
