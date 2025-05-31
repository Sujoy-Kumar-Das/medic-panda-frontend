import WaringModal from "@/components/modal/warning-modal/WarningModal";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useDeleteManufacturer from "@/hooks/useDeleteManufacturer";
import { Button, Divider } from "@mui/material";

interface ManufacturerDeleteModalProps {
  onClose: () => void;
  id: string;
}

export default function ManufacturerDeleteModal({
  onClose,
  id,
}: ManufacturerDeleteModalProps) {
  const { handlerFunc, isLoading } = useDeleteManufacturer(onClose);
  return (
    <WaringModal open onClose={onClose}>
      <WaringModal.Title>Are you sure you want to delete?</WaringModal.Title>

      <WaringModal.Message>
        Deleting this operation is permanent and cannot be undone. Please
        confirm your action.
      </WaringModal.Message>

      <Divider sx={{ my: 2 }} />
      <WaringModal.Content>
        <Button color="warning" onClick={onClose}>
          Close
        </Button>
        <LoaderButton isLoading={isLoading} onClick={() => handlerFunc(id)}>
          Delete
        </LoaderButton>
      </WaringModal.Content>
    </WaringModal>
  );
}
