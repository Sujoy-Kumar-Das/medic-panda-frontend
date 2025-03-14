"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputBase, Stack, SxProps } from "@mui/material";
import { FormEvent } from "react";
import useSearch from "../../../hooks/useSearch";

export default function SearchBar({
  query,
  placeholder,
  sxProps,
}: {
  query: string;
  placeholder: string;
  sxProps?: SxProps;
}) {
  const { search } = useSearch();
  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get(query);

    search({ query, value: searchTerm as string });
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSearch}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: "center",
          padding: "4px",
          borderRadius: 1,
          border: "1px solid #ffff",
          backgroundColor: "background.default",
          boxShadow: "none",
          ...sxProps,
        }}
      >
        <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
          <InputBase
            placeholder={placeholder || "Search..."}
            inputProps={{ "aria-label": query }}
            sx={{ marginLeft: 1, flex: 1, boxShadow: "none" }}
            name={query}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            color: "text.primary",
            "&:hover": {
              bgcolor: "transparent",
              boxShadow: "none",
            },
          }}
          type="submit"
        >
          <SearchIcon />
        </Button>
      </Stack>
    </form>
  );
}
