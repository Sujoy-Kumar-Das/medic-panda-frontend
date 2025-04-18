import useDeleteProduct from "@/hooks/useDeleteProduct.hook";
import { LoadingButton } from "@mui/lab";

export default function DeleteProductConfirmButton({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const { handlerFunc, isLoading } = useDeleteProduct(onClose);

  return (
    <LoadingButton
      loading={isLoading}
      onClick={() => handlerFunc(id)}
      loadingIndicator="Deleting"
      disabled={isLoading}
    >
      Delete
    </LoadingButton>
  );
}
