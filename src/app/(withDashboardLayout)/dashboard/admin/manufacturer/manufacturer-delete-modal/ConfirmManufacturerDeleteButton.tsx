import useDeleteManufacturer from "@/hooks/useDeleteManufacturer";
import { LoadingButton } from "@mui/lab";

interface ConfirmManufacturerDeleteButton {
  id: string;
  onClose: () => void;
}

export default function ConfirmManufacturerDeleteButton({
  id,
  onClose,
}: ConfirmManufacturerDeleteButton) {
  const { handlerFunc, isLoading } = useDeleteManufacturer(onClose);

  return (
    <LoadingButton
      loading={isLoading}
      onClick={() => handlerFunc(id)}
      loadingIndicator="Deleting..."
    >
      Delete
    </LoadingButton>
  );
}
