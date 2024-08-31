"use client";
import ProductCard from "@/components/ui/card/ProductCard";
import { useGetAllCategoriesQuery } from "@/redux/api/category.api";
import CategoryIcon from "@mui/icons-material/Category";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Link from "next/link";
import { useState } from "react";
import CategoryModal from "./CategoryModal";

export default function ProductDrawer({ products }) {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const { data } = useGetAllCategoriesQuery(undefined);

  const handleCategoryModal = () => {
    setOpenCategoryModal((prev) => !prev);
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
              >
                <IconButton
                  sx={{ p: "10px", display: { xs: "block", md: "none" } }}
                  onClick={handleCategoryModal}
                >
                  <CategoryIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search products"
                  inputProps={{ "aria-label": "search products" }}
                />
                <IconButton
                  type="button"
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
                    href={"/"}
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
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <CategoryModal
        open={openCategoryModal}
        setOpen={setOpenCategoryModal}
        data={data}
      />
    </>
  );
}
