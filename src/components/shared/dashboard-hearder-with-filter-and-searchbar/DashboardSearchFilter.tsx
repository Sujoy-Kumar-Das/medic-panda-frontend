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
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems="stretch"
      justifyContent="flex-end"
      spacing={2}
      sx={{ width: "100%", flex: 1 }}
    >
      <SearchBar
        query={searchbarOptions.query}
        placeholder={searchbarOptions.placeholder || ""}
        sxProps={{
          width: { xs: "100%", sm: "100%", md: 300 },
          minHeight: 50,
        }}
      />
      <FilterCompo
        items={allFilterOptions.items}
        sx={{
          width: { xs: "100%", sm: 180 },
          minHeight: 50,
          border: "none",
          bgcolor: "background.default",
        }}
        placeholder={
          <Stack direction="row" alignItems="center" gap={1}>
            <FilterAltIcon />
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem" }}>
              {allFilterOptions.placeholder || "Filter"}
            </Typography>
          </Stack>
        }
      />
    </Stack>
  );
}

export default DashboardSearchFilter;
