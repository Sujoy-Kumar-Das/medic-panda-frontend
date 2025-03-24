import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useDeleteProduct from "@/hooks/useDeleteProduct.hook";

export default function DeleteProductConfirmButton({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const { handlerFunc, isLoading } = useDeleteProduct(onClose);

  return (
    <LoaderButton
      isLoading={isLoading}
      onClick={() => handlerFunc(id)}
      loadingText="Deleting"
    >
      Delete
    </LoaderButton>
  );
}
