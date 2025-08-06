"use client";
import useSearch from "@/hooks/useSearch";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Stack, SxProps } from "@mui/material";
import { FormEvent } from "react";

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
    <Stack
      component="form"
      onSubmit={handleSearch}
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        borderRadius: 1,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.default",
        px: 1,
        ...sxProps,
      }}
    >
      <InputBase
        placeholder={placeholder || "Search..."}
        inputProps={{ "aria-label": query }}
        sx={{ flex: 1 }}
        name={query}
      />
      <IconButton type="submit" color="inherit" sx={{ minWidth: 40 }}>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}
