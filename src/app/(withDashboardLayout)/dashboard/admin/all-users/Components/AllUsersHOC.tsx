"use client";
import HandleLoadingErrorAndNoData from "@/components/hoc/HandleLoadingErrorAndNoData";
import SearchBar from "@/components/shared/searchBar/SearchBar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  Box,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const AllUsersCompo = ({ data }: { data: [] }) => {
  const columns: any = [
    {
      field: "email",
      headerName: "Email",
      width: 300,
      headerAlign: "center",
      renderCell: ({ row }: { row: any }) => (
        <Typography align="center" py={2}>
          {row.email}
        </Typography>
      ),
    },
    {
      field: "role",
      headerName: "Role",
      width: 100,
      headerAlign: "center",
      renderCell: ({ row }: { row: any }) => (
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          py={1}
        >
          <Chip
            sx={{ fontWeight: "bold", textTransform: "uppercase" }}
            color="primary"
            label={row?.role}
          />
        </Stack>
      ),
    },
    {
      field: "isVerified",
      headerName: "Verification",
      width: 150,
      headerAlign: "center",
      renderCell: ({ row }: { row: any }) => (
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          py={1}
        >
          {row?.isVerified ? (
            <IconButton color="primary">
              <VerifiedUserIcon />
            </IconButton>
          ) : (
            <IconButton color="error">
              <GppMaybeIcon />
            </IconButton>
          )}
        </Stack>
      ),
    },
    {
      field: "isBlocked",
      headerName: "Status",
      width: 150,
      headerAlign: "center",
      renderCell: ({ row }: { row: any }) => (
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          py={1}
        >
          <Chip
            sx={{ fontWeight: "bold", textTransform: "uppercase" }}
            color={row?.isBlocked ? "error" : "primary"}
            label={row?.isBlocked ? "Blocked" : "Active"}
          />
        </Stack>
      ),
    },
    {
      field: "block-user",
      headerName: "Block",
      width: 120,
      headerAlign: "center",
      renderCell: ({ row }: { row: any }) => (
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          py={1}
        >
          <IconButton color="error">
            <BlockIcon />
          </IconButton>
        </Stack>
      ),
    },
    {
      field: "delete-user",
      headerName: "Action",
      width: 120,
      headerAlign: "center",
      renderCell: ({ row }: { row: any }) => (
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          py={1}
        >
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },

    {
      field: "view-profile",
      headerName: "Details",
      width: 120,
      headerAlign: "center",
      renderCell: ({ row }: { row: any }) => (
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          py={1}
        >
          <IconButton color="primary">
            <ArrowForwardIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Container>
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        bgcolor={"background.paper"}
        py={2}
        borderRadius={1}
      >
        <SearchBar />
      </Stack>
      <Box>
        <DataGrid
          rows={data || []}
          columns={columns}
          getRowId={(row: any) => row._id}
          disableColumnSorting
          disableColumnMenu
          disableColumnResize
          hideFooter
          hideFooterPagination
          hideFooterSelectedRowCount
        />
      </Box>
    </Container>
  );
};

const AllUsersHOC = HandleLoadingErrorAndNoData(AllUsersCompo);

export default AllUsersHOC;
