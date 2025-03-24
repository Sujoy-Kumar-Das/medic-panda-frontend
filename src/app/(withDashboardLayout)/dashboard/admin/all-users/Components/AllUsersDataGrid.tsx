import CustomDataGrid from "@/components/CustomDataGrid/CustomDataGrid";
import { IUserData } from "@/types/user.type";
import { UsersColumns } from "./users.columns";

export default function AllUsersDataGrid({
  users,
  isLoading,
  isError,
}: {
  users: IUserData[];
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
