"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputBase, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const handleSearch = (event) => {
    event.preventDefault();

    const value = event.target.search.value;
    if (value) {
      router.push(`/products?title=${value}`);
    }
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
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ marginLeft: 1, flex: 1, boxShadow: "none" }}
              name="search"
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
