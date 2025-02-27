import { Stack, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import ActionMenu from "./ActiconMenu";
export const productColumns: GridColDef<any>[] = [
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
    headerName: "Title",
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
    field: "category",
    headerName: "Category",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => (
      <Typography align="center" py={2}>
        {row.category.name}
      </Typography>
    ),
  },
  {
    field: "price",
    headerName: "Original Price",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => (
      <Typography align="center" py={2}>
        ${row.price}
      </Typography>
    ),
  },
  {
    field: "current price",
    headerName: "Current Price",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => (
      <Typography align="center" py={2}>
        ${row.discount ? row.discount.discountPrice : row.price}
      </Typography>
    ),
  },
  {
    field: "discount",
    headerName: "Discount",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => (
      <Typography align="center" py={2}>
        {row.discount ? row.discount.percentage : 0}%
      </Typography>
    ),
  },
  {
    field: "actions",
    headerName: "Action",
    flex: 1,
    minWidth: 100,
    headerAlign: "center",
    renderCell: ({ row }) => (
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        py={1}
      >
        {/* <IconButton color="primary">
          <MoreVertIcon />
        </IconButton> */}
        <ActionMenu id={row._id} />
      </Stack>
    ),
  },
];
