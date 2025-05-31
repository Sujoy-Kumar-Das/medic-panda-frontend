import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import ChangeOrderStatusModalButton from "../modals/change-order-status-modal/ChangeOrderStatusModalButton";
import OrderDetailsModalButton from "../modals/order-details-modal/OrderDetailsModalButton";
import OrderStatusChip from "./OrderStatusChip";

export const AdminOrderDataColumn: GridColDef<any>[] = [
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
    field: "_id",
    headerName: "Oder ID",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => (
      <Typography sx={{ width: "100%" }} align="center" py={2}>
        {row._id}
      </Typography>
    ),
  },

  {
    field: "product",
    headerName: "Product ID",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => (
      <Typography align="center" py={2}>
        {row.product}
      </Typography>
    ),
  },
  {
    field: "Status",
    headerName: "Status",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => <OrderStatusChip status={row.status} />,
  },
  {
    field: "Change Status",
    headerName: "Change Status",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => <ChangeOrderStatusModalButton orderId={row._id} />,
  },
  {
    field: "order details",
    headerName: "Action",
    headerAlign: "center",
    flex: 1,
    minWidth: 150,
    renderCell: ({ row }) => <OrderDetailsModalButton orderId={row?._id} />,
  },
];
