import FilterCompo from "@/components/shared/filter/FilterCompo";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Stack, Typography } from "@mui/material";
import { filterItemsData } from "./filterItems";

export default function AllUsersFilterItems() {
  return (
    <FilterCompo
      items={filterItemsData}
      sx={{
        width: 150,
        height: 50,
        border: "none",
        bgcolor: "background.default",
      }}
      placeholder={
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <FilterAltIcon /> <Typography>Filter</Typography>
        </Stack>
      }
    />
  );
}
