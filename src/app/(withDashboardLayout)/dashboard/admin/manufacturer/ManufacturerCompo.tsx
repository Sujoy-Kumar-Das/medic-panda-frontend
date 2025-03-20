import { IManufacturer } from "@/types/Imanufacturer.type";
import { Container } from "@mui/material";
import ManufacturerDataGrid from "./ManufacturerDataGrid/ManufacturerDataGrid";
import ManufacturerHeader from "./ManufacturerHeader";

interface ManufacturerCompoProps {
  data: IManufacturer[];
}

export default function ManufacturerCompo({ data }: ManufacturerCompoProps) {
  return (
    <Container sx={{ pb: 3 }}>
      <ManufacturerHeader />
      <ManufacturerDataGrid manufacturers={data} />
    </Container>
  );
}
