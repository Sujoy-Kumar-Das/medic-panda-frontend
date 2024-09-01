"use client";
import ProductCard from "@/components/ui/card/ProductCard";
import { useGetAllCategoriesQuery } from "@/redux/api/category.api";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import CategoryModal from "./CategoryModal";

export default function ProductDrawer({ products, meta }) {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [skip, setSkip] = useState<number>(0);
  const { data } = useGetAllCategoriesQuery(undefined);

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  console.log(meta);

  const handleCategoryModal = () => {
    setOpenCategoryModal((prev) => !prev);
  };

  const handleQueryParams = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get("searchTerm");
    const params = new URLSearchParams(searchParams);

    if (searchParams) {
      params.set("searchTerm", searchTerm as string);
    } else {
      params.delete("searchTerm");
    }

    replace(`${pathName}?${params.toString()}`);
  };

  const handlePagination = (event, page) => {
    const params = new URLSearchParams(searchParams);

    if (page) {
      params.set("page", page);
    } else {
      params.delete("page");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              height: { xs: "auto", md: "100vh" },
              backgroundColor: { xs: "transparent", md: "background.default" },
              padding: { xs: 2, md: 3 },
              borderRadius: 2,
              position: { md: "sticky" },
              top: 0,
              width: "100%",
            }}
          >
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
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search products"
                  inputProps={{ "aria-label": "search products" }}
                  name="searchTerm"
                  defaultValue={searchParams.get("searchTerm")?.toString()}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography color={"text.primary"} fontWeight={"bold"} mt={2}>
                Categories
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack direction={"column"} spacing={1}>
                {data?.map((item) => (
                  <Typography
                    key={item._id}
                    component={Link}
                    href={`/product?category=${item._id}`}
                    sx={{
                      textDecoration: "none",
                      color: "text.secondary",
                      fontSize: 18,
                      fontWeight: "500",
                      display: "block",
                      transition: "color 0.3s",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          {products?.length ? (
            <>
              <Grid container spacing={2}>
                {products.map((product) => (
                  <Grid item xs={12} sm={6} md={4} key={product._id}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
              <Stack direction={"row"} justifyContent={"center"} mt={5}>
                <Pagination
                  count={meta.totalPage}
                  onChange={handlePagination}
                />
              </Stack>
            </>
          ) : (
            <Typography variant="h6" textAlign="center" color="text.secondary">
              No products available
            </Typography>
          )}
        </Grid>
      </Grid>

      {data && (
        <CategoryModal
          open={openCategoryModal}
          setOpen={setOpenCategoryModal}
          data={data}
        />
      )}
    </>
  );
}
