import CustomDataGrid from "@/components/CustomDataGrid/CustomDataGrid";
import { IOrder } from "@/types";
import { AdminOrderDataColumn } from "./AdminOrderDataColumn";

interface AdminOrderDataGridProps {
  orders: IOrder[];
  isLoading: boolean;
  isError: boolean;
}

export default function AdminOrderDataGrid({
  orders,
  isLoading,
  isError,
}: AdminOrderDataGridProps) {
  return (
    <CustomDataGrid
      rows={orders || []}
      columns={AdminOrderDataColumn}
      noDataMessage="No Order Found"
      loading={isLoading}
      error={isError}
    />
  );
}
