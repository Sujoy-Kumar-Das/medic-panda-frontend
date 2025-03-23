import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useDeleteCategory from "@/hooks/useDeleteCategory";

export default function CategoryDeleteButton({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const { handlerFunc, isLoading } = useDeleteCategory(onClose);

  const handleDeleteCategory = async (id: string) => {
    await handlerFunc(id);
  };
  return (
    <LoaderButton
      onClick={() => handleDeleteCategory(id)}
      isLoading={isLoading}
      loadingText="Deleting..."
    >
      Delete
    </LoaderButton>
  );
}
