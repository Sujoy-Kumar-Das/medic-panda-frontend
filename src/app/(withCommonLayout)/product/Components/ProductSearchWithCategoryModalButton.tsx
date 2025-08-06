"use client";
import useSearch from "@/hooks/useSearch";
import useToggleState from "@/hooks/useToggleState";
import { ICategory } from "@/types";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { FormEvent } from "react";
import CategoryModal from "./CategoryModal";

export default function ProductSearchWithCategoryModalButton({
  categories,
}: {
  categories: ICategory[];
}) {
  const categoryModal = useToggleState();

  const { search, getParam } = useSearch();

  // search query handler
  const handleQueryParams = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchTerm = (formData.get("searchTerm") ?? "") as string;

    if (!searchTerm) {
      return;
    }

    // Create a mutable copy of the searchParams
    search({ searchTerm });
  };

  const defaultValue = getParam("searchTerm");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: { xs: 2, md: 3 },
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "24px",
            backgroundColor: {
              xs: "transparent",
              md: "background.default",
            },
            width: "100%",
            boxShadow: { xs: 1, md: "none" },
            padding: "2px 5px",
          }}
          onSubmit={handleQueryParams}
        >
          <IconButton
            sx={{ p: "10px", display: { xs: "block", md: "none" } }}
            onClick={categoryModal.onOpen}
            type="button"
            aria-label="toggle category modal"
          >
            <CategoryIcon />
          </IconButton>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              backgroundColor: "transparent",
              "&:focus-within": {
                backgroundColor: "transparent",
              },
            }}
            placeholder="Search products"
            inputProps={{ "aria-label": "search products" }}
            name="searchTerm"
            defaultValue={defaultValue}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* category modal for mobile */}
      {categoryModal.state && (
        <CategoryModal
          categories={categories}
          onClose={categoryModal.onClose}
        />
      )}
    </>
  );
}
