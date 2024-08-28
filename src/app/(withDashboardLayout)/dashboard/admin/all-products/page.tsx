"use client";
import SearchBar from "@/components/shared/searchBar/SearchBar";
import { useGetAllProductsQuery } from "@/redux/api/product.api";
import { IProduct } from "@/types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { useState } from "react";
import AddProductModal from "./Components/AddProductModal";
import DeleteProductModal from "./Components/DeleteProductModal";
import EditProductModal from "./Components/EditProductModal";

export default function AllProductsPage() {
  const [addProductModal, setAddProductModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editModalId, setEditModalId] = useState("");
  const [deletedId, setDeletedId] = useState("");
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  const handleAddProductModal = () => {
    setAddProductModal(true);
  };

  const handleDeleteModal = (id: string) => {
    setDeleteModal(true);
    setDeletedId(id);
  };

  const handleEditModal = (id: string) => {
    setEditModal(true);
    setEditModalId(id);
  };

  const columns: any = [
    {
      field: "name",
      headerName: "Name",
      width: 300,
      headerAlign: "center",
      renderCell: ({ row }: { row: IProduct }) => (
        <Typography align="center" py={2}>
          {row.name}
        </Typography>
      ),
    },
    {
      field: "discountPrice",
      headerName: "Discount",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }: { row: IProduct }) => (
        <Typography align="center" py={2}>
          {row.discountPrice ? `$${row.discountPrice.toFixed(2)}` : `$0.00`}
        </Typography>
      ),
    },
    {
      field: "discountPercentage",
      headerName: "Percentage",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }: { row: IProduct }) => (
        <Typography align="center" py={2}>
          {row.discountPercentage
            ? `${row.discountPercentage.toFixed(1)}%`
            : `0%`}
        </Typography>
      ),
    },
    {
      field: "stockStatus",
      headerName: "Stock",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }: { row: IProduct }) => (
        <Typography
          py={2}
          align="center"
          color={row.stockStatus ? "green" : "red"}
        >
          {row.stockStatus ? `Available` : `Out of stock`}
        </Typography>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }: { row: IProduct }) => (
        <IconButton
          size="small"
          color="primary"
          onClick={() => handleEditModal(row?._id)}
        >
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }: { row: IProduct }) => (
        <IconButton
          size="small"
          color="error"
          onClick={() => handleDeleteModal(row._id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
    {
      field: "detail",
      headerName: "Detail",
      width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }: { row: IProduct }) => (
        <IconButton
          size="small"
          color="secondary"
          component={Link}
          href={`/product/${row._id}`}
        >
          <ArrowForwardIcon />
        </IconButton>
      ),
    },
  ];

  if (isLoading) {
    return (
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center">
          Loading...
        </Typography>
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Box bgcolor={"background.paper"} borderRadius={1} mb={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProductModal}
          >
            Add Product
          </Button>
          <SearchBar />
        </Stack>
      </Box>

      <Box>
        <DataGrid
          rows={data || []}
          columns={columns}
          getRowId={(row) => row._id}
          disableColumnSorting
          disableColumnMenu
          disableColumnResize
          hideFooter
          hideFooterPagination
          hideFooterSelectedRowCount
        />
      </Box>

      <AddProductModal open={addProductModal} setOpen={setAddProductModal} />

      <EditProductModal
        id={editModalId}
        open={editModal}
        setOpen={setEditModal}
      />

      <DeleteProductModal
        open={deleteModal}
        setOpen={setDeleteModal}
        id={deletedId}
      />
    </Container>
  );
}
