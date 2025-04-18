import useDeleteCategory from "@/hooks/useDeleteCategory";
import { LoadingButton } from "@mui/lab";

export default function CategoryDeleteButton({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const { handlerFunc, isLoading } = useDeleteCategory(onClose);

  return (
    <LoadingButton
      onClick={() => handlerFunc(id)}
      loading={isLoading}
      loadingIndicator="Deleting..."
      disabled={isLoading}
    >
      Delete
    </LoadingButton>
  );
}
