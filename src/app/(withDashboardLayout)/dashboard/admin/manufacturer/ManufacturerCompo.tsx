import { Container } from "@mui/material";
import ManufacturerDataGrid from "./ManufacturerDataGrid/ManufacturerDataGrid";
import ManufacturerHeader from "./ManufacturerHeader";

export default function ManufacturerCompo({ data }) {
  console.log(data);
  return (
    <Container>
      <ManufacturerHeader />

      <ManufacturerDataGrid manufacturers={data} />
    </Container>
  );
}
