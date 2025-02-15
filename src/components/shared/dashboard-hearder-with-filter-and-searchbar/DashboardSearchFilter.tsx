import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Stack, Typography } from "@mui/material";
import FilterCompo from "../filter/FilterCompo";
import SearchBar from "../searchBar/SearchBar";
import {
  IAllFilterSearchOptions,
  ISearchOptions,
} from "./dashboard.header.type";

interface SearchFilterSectionProps {
  searchbarOptions: ISearchOptions;
  allFilterOptions: IAllFilterSearchOptions;
}

function DashboardSearchFilter({
  searchbarOptions,
  allFilterOptions,
}: SearchFilterSectionProps) {
  return (
    <Stack direction="row" alignItems="center" py={2} borderRadius={1} gap={2}>
      <SearchBar
        query={searchbarOptions.query}
        placeholder={searchbarOptions.placeholder || ""}
        sxProps={{ width: 350, height: 50 }}
      />
      <FilterCompo
        items={allFilterOptions.items}
        sx={{
          width: 150,
          height: 50,
          border: "none",
          bgcolor: "background.default",
        }}
        placeholder={
          <Stack direction="row" alignItems="center" gap={1}>
            <FilterAltIcon />
            <Typography>{allFilterOptions.placeholder || "Filter"}</Typography>
          </Stack>
        }
      />
    </Stack>
  );
}

export default DashboardSearchFilter;
