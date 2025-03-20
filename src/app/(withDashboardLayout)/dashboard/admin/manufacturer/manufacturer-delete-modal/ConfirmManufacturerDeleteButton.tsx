import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useDeleteManufacturer from "@/hooks/useDeleteManufacturer";

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
    <LoaderButton isLoading={isLoading} onClick={() => handlerFunc(id)}>
      Delete
    </LoaderButton>
  );
}
