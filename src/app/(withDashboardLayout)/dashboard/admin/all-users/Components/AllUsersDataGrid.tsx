import CustomDataGrid from "@/components/CustomDataGrid/CustomDataGrid";
import { UsersColumns } from "./users.columns";

export default function AllUsersDataGrid({
  users,
  isLoading,
  isError,
}: {
  users: any[];
  isLoading: boolean;
  isError: boolean;
}) {
  return (
    <CustomDataGrid
      rows={users}
      columns={UsersColumns}
      loading={isLoading}
      error={isError}
    />
  );
}
