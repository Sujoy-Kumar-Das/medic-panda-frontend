import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Chip, IconButton, Stack, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import UserActinMenu from "./user-action-menu/UserActinoMenu";

export const UsersColumns: GridColDef<any>[] = [
  {
    field: "index",
    headerName: "Index",
    headerAlign: "center",
    flex: 0.5,
    minWidth: 50,
    renderCell: (params) => (
      <Typography align="center" py={2}>
        {params.api.getAllRowIds().indexOf(params.id) + 1}
      </Typography>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    headerAlign: "center",
    flex: 2,
    minWidth: 200,
    renderCell: ({ row }) => (
      <Typography align="center" py={2}>
        {row.email}
      </Typography>
    ),
  },
  {
    field: "role",
    headerName: "Role",
    headerAlign: "center",
    flex: 1,
    minWidth: 100,
    renderCell: ({ row }) => (
      <Stack direction="row" justifyContent="center" alignItems="center" py={1}>
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
    headerAlign: "center",
    flex: 1,
    minWidth: 120,
    renderCell: ({ row }) => (
      <Stack direction="row" justifyContent="center" alignItems="center" py={1}>
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
    headerAlign: "center",
    flex: 1,
    minWidth: 120,
    renderCell: ({ row }) => (
      <Stack direction="row" justifyContent="center" alignItems="center" py={1}>
        <Chip
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          color={row?.isBlocked ? "error" : "primary"}
          label={row?.isBlocked ? "Blocked" : "Active"}
        />
      </Stack>
    ),
  },
  {
    field: "action-menu",
    headerName: "Action",
    headerAlign: "center",
    flex: 1,
    minWidth: 120,
    renderCell: ({ row }) => (
      <UserActinMenu isBlocked={row.isBlocked} id={row._id} />
    ),
  },
];
