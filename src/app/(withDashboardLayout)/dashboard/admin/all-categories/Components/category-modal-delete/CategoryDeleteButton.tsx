import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useDeleteCategory from "@/hooks/useDeleteCategory";

export default function CategoryDeleteButton({
  id,
  onclose,
}: {
  id: string;
  onclose: () => void;
}) {
  const { handlerFunc, isLoading } = useDeleteCategory();

  const handleDeleteCategory = async (id: string) => {
    await handlerFunc(id);
    onclose();
  };
  return (
    <LoaderButton
      onClick={() => handleDeleteCategory(id)}
      isLoading={isLoading}
      loadingText="Deleting"
    >
      Delete
    </LoaderButton>
  );
}
