import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useDeleteProduct from "@/hooks/useDeleteProduct.hook";

export default function DeleteProductConfirmButton({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const { handleDeleteProduct, isLoading } = useDeleteProduct();

  const handleDelete = async (id: string) => {
    await handleDeleteProduct(id);
    onClose();
  };

  return (
    <LoaderButton
      isLoading={isLoading}
      onClick={() => handleDelete(id)}
      loadingText="Deleting"
    >
      Delete
    </LoaderButton>
  );
}
