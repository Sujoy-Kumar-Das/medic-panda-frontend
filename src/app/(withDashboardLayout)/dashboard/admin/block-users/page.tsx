"use client";

import SearchBar from "@/components/shared/searchBar/SearchBar";
import { useGetAllBlockedUsersQuery } from "@/redux/api/user.api";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ReplayIcon from "@mui/icons-material/Replay";
import {
  Box,
  Chip,
  CircularProgress,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function BlockedUsersPage() {
  const { data, isLoading } = useGetAllBlockedUsersQuery(undefined);

  console.log(data);

  const columns: any = [
    {
      field: "name",
      headerName: "Name",
      width: 300,
      headerAlign: "center",
      renderCell: ({ row }: { row: any }) => (
        <Typography align="center" py={2}>
          {row.name}
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
            label={row?.user?.role}
          />
        </Stack>
      ),
    },
    {
      field: "verify",
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
          {row?.user?.isVerified ? (
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
      field: "block",
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
            color={row?.user?.isBlocked ? "error" : "primary"}
            label={row?.user?.isBlocked ? "Blocked" : "Active"}
          />
        </Stack>
      ),
    },
    {
      field: "unblock-user",
      headerName: "Unblock",
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
            <ReplayIcon />
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
      headerName: "Profile",
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
          getRowId={(row) => row._id}
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
}
