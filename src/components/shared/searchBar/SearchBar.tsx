"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputBase, Stack } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export default function SearchBar({
  query,
  placeholder,
}: {
  query: string;
  placeholder: string;
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get(query);

    if (!searchTerm) {
      replace(pathName);
      return;
    }

    // Create a mutable copy of the searchParams
    const params = new URLSearchParams(searchParams.toString());

    if (searchParams) {
      params.set(query, searchTerm as string);
    } else {
      params.delete(query);
    }

    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "center" }}>
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
      </Box>
    </form>
  );
}
