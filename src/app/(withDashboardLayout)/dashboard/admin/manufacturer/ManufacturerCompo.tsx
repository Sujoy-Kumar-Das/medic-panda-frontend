import { IManufacturer } from "@/types/Imanufacturer.type";
import { Container } from "@mui/material";
import ManufacturerDataGrid from "./ManufacturerDataGrid/ManufacturerDataGrid";
import ManufacturerHeader from "./ManufacturerHeader";

interface ManufacturerCompoProps {
  data: IManufacturer[];
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
      <ManufacturerDataGrid
        manufacturers={data}
        isLoading={isLoading}
        isError={isError}
      />
    </Container>
  );
}
