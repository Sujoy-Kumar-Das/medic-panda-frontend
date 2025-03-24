import CustomDataGrid from "@/components/CustomDataGrid/CustomDataGrid";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { ManufacturerColumns } from "./ManufacturerColumns";

interface ManufacturerDataGridProps {
  manufacturers: IManufacturer[];
  isLoading: boolean;
  isError: boolean;
}

export default function ManufacturerDataGrid({
  manufacturers,
  isLoading,
  isError,
}: ManufacturerDataGridProps) {
  return (
    <CustomDataGrid
      rows={manufacturers || []}
      columns={ManufacturerColumns}
      loading={isLoading}
      error={isError}
      noDataMessage="No Manufacturer found."
    />
  );
}
