"use client";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, FormEvent, SetStateAction } from "react";

export default function ProductSearch({
  setOpenCategoryModal,
}: {
  setOpenCategoryModal: Dispatch<SetStateAction<boolean>>;
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  // search query handler
  const handleQueryParams = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get("searchTerm");

    if (!searchTerm) {
      replace(pathName);
      return;
    }

    // Create a mutable copy of the searchParams
    const params = new URLSearchParams(searchParams.toString());

    if (searchParams) {
      params.set("searchTerm", searchTerm as string);
    } else {
      params.delete("searchTerm");
    }

    replace(`${pathName}?${params.toString()}`);
  };

  // handle the category modal
  const handleCategoryModal = () => {
    setOpenCategoryModal((prev) => !prev);
  };
  return (
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
            xs: "background.paper",
            md: "background.paper",
          },
          width: "100%",
          boxShadow: { xs: 1, md: "none" },
          padding: "4px 8px",
        }}
        onSubmit={handleQueryParams}
      >
        <IconButton
          sx={{ p: "10px", display: { xs: "block", md: "none" } }}
          onClick={handleCategoryModal}
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
          defaultValue={searchParams.get("searchTerm")?.toString()}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
