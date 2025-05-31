import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Loader from "../shared/loader/Loader";
import NoDataFoundGridCompo from "../shared/notFound/NoDataFoundGridCompo";

interface CustomDataGridProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading?: boolean;
  error?: boolean;
  noDataMessage?: string;
}

const CustomDataGrid = ({
  rows,
  columns,
  loading = false,
  noDataMessage = "No data found",
}: CustomDataGridProps) => {
  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={rows || []}
        columns={columns}
        getRowId={(row) => row._id}
        loading={loading}
        disableColumnSorting
        disableColumnMenu
        disableColumnResize
        hideFooter
        hideFooterPagination
        hideFooterSelectedRowCount
        slots={{
          noRowsOverlay: () => <NoDataFoundGridCompo message={noDataMessage} />,
          loadingOverlay: () => <Loader height="100%" />,
        }}
      />
    </Box>
  );
};

export default CustomDataGrid;
