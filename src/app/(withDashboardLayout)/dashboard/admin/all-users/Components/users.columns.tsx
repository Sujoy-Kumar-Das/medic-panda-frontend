import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Chip, IconButton, Stack, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import OpenBlockUserModalButton from "./block-user-modal/OpenBlockUserModalButton";
import OpenDeleteUserModalButton from "./delete-user-modal/OpenDeleteUserModalButton";
import OpenUnBlockUserButton from "./unblock-user-modal/OpenUnBlockUserButton";

export const UsersColumns: GridColDef<any>[] = [
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
      <>
        {!row.isBlocked ? (
          <OpenBlockUserModalButton userId={row._id} />
        ) : (
          <OpenUnBlockUserButton userId={row._id} />
        )}
      </>
    ),
  },
  {
    field: "delete-user",
    headerName: "Action",
    width: 120,
    headerAlign: "center",
    renderCell: ({ row }: { row: any }) => (
      <OpenDeleteUserModalButton userId={row._id} />
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
