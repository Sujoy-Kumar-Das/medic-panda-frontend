import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import ManufacturerActionMenu from "./manufacturer-action-menu/ManufacturerActionMenu";
export const ManufacturerColumns: GridColDef<any>[] = [
  {
    field: "index",
    headerName: "Index",
    headerAlign: "center",
    renderCell: (params) => (
      <Typography align="center" py={2}>
        {params.api.getAllRowIds().indexOf(params.id) + 1}
      </Typography>
    ),
  },
  {
    field: "name",
    headerName: "Company Name",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => (
      <Typography sx={{ width: "100%" }} align="center" py={2}>
        {row.name}
      </Typography>
    ),
  },

  {
    field: "contact_number",
    headerName: "Contact Number",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => (
      <Typography align="center" py={2}>
        {row.contact}
      </Typography>
    ),
  },
  {
    field: "address",
    headerName: "Address",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => (
      <Typography align="center" py={2} textTransform={"capitalize"}>
        {row.address.city}-{row.address.zipCode} {row.address.state}
        {row.address.country}
      </Typography>
    ),
  },
  {
    field: "actions",
    headerName: "Action",
    flex: 1,
    minWidth: 100,
    headerAlign: "center",
    renderCell: ({ row }) => <ManufacturerActionMenu manufacturer={row} />,
  },
];
