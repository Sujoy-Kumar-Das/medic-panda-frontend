"use client";
import { useGetAllCategoriesQuery } from "@/redux/api/category.api";
import { ICategory, IGenericErrorResponse } from "@/types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import CategoryHOC from "./Components/CategoryHOC";

export default function AllProductsPage() {
  const [createCategoryModal, setCreateCategoryModal] = useState(false);
  const { data, isLoading, error } = useGetAllCategoriesQuery(undefined);

  const handleCreateCategoryModal = () => {
    setCreateCategoryModal((prev) => !prev);
  };

  const columns: any = [
    {
      field: "thumbnail",
      headerName: "Thumbnail",
      width: 200,
      headerAlign: "center",
      renderCell: ({ row }: { row: ICategory }) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            alt="thumbnail image"
            src={row.thumbnail}
            height={50}
            width={50}
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      headerAlign: "center",
      renderCell: ({ row }: { row: ICategory }) => (
        <Typography align="center" py={2}>
          {row.name}
        </Typography>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 180,
      headerAlign: "center",
      renderCell: ({ row }: { row: ICategory }) => (
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
        </Stack>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 180,
      headerAlign: "center",
      renderCell: ({ row }: { row: ICategory }) => (
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
    {
      field: "details",
      headerName: "Detail",
      width: 180,
      headerAlign: "center",
      renderCell: ({ row }: { row: ICategory }) => (
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton color="info">
            <ArrowForwardIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <CategoryHOC
      data={data}
      error={error as IGenericErrorResponse}
      isLoading={isLoading}
    />
  );
}
