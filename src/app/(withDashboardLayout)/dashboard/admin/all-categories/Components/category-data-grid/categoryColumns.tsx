import formatOrderDate from "@/utils/format.order.date";
import { Chip, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import CategoryActionMenu from "./category-action-menu/CategoryActionMenu";

export const CategoryColumns: GridColDef[] = [
  {
    field: "index",
    headerName: "#",
    width: 80,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => (
      <Typography py={1}>
        {params.api.getAllRowIds().indexOf(params.id) + 1}
      </Typography>
    ),
  },
  {
    field: "name",
    headerName: "Category Name",
    flex: 1,
    minWidth: 180,
    headerAlign: "center",
    align: "center",
    renderCell: ({ row }) => (
      <Typography fontWeight={500} color="text.primary" py={1}>
        {row.name}
      </Typography>
    ),
  },
  {
    field: "popularity",
    headerName: "Popularity",
    width: 140,
    headerAlign: "center",
    align: "center",
    renderCell: ({ row }) => (
      <Chip
        label={row.popularity ? "Popular" : "Unpopular"}
        color={row.popularity ? "success" : "default"}
        variant="outlined"
        sx={{ fontWeight: 600, px: 1.5, py: 1 }}
      />
    ),
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 180,
    headerAlign: "center",
    align: "center",
    renderCell: ({ row }) => (
      <Typography fontSize={14} color="text.secondary" py={1}>
        {row.createdAt ? formatOrderDate(row.createdAt) : "N/A"}
      </Typography>
    ),
  },
  {
    field: "action",
    headerName: "Action",
    width: 180,
    headerAlign: "center",
    align: "center",
    renderCell: ({ row }) => <CategoryActionMenu category={row} />,
  },
];
