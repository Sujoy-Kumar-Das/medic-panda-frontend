import { IMeta } from "@/types";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { Box, Container } from "@mui/material";
import ManufacturerDataGrid from "./ManufacturerDataGrid/ManufacturerDataGrid";
import ManufacturerHeader from "./ManufacturerHeader";

interface ManufacturerCompoProps {
  data: {
    result: IManufacturer[];
    meta: IMeta;
  };
  isLoading: boolean;
  isError: boolean;
}

export default function ManufacturerCompo({
  data,
  isLoading,
  isError,
}: ManufacturerCompoProps) {
  return (
    <Container sx={{ pb: 3 }}>
      <ManufacturerHeader />

      <Box sx={{ mt: 3, overflow: "auto" }}>
        <ManufacturerDataGrid
          manufacturers={data.result}
          isLoading={isLoading}
          isError={isError}
        />
      </Box>
    </Container>
  );
}
