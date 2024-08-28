import SearchBar from "@/components/shared/searchBar/SearchBar";
import { Box, Button, Container, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function AllAdminPage() {
  return (
    <Container sx={{ py: 5 }}>
      <Box bgcolor={"background.paper"} borderRadius={1} mb={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button variant="contained" color="primary">
            Add Admin
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
    </Container>
  );
}
