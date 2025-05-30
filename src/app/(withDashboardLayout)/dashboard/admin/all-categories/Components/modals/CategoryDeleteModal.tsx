import WaringModal from "@/components/modal/warning-modal/WarningModal";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useDeleteCategory from "@/hooks/useDeleteCategory";
import { Button, Divider } from "@mui/material";

interface CategoryDeleteModalProps {
  onClose: () => void;
  categoryId: string;
}

export default function CategoryDeleteModal({
  onClose,
  categoryId,
}: CategoryDeleteModalProps) {
  const { handlerFunc, isLoading } = useDeleteCategory(onClose);

  return (
    <WaringModal open onClose={onClose}>
      <WaringModal.Title>Are you sure?</WaringModal.Title>
      <WaringModal.Message>
        This action is permanent and cannot be undone.
      </WaringModal.Message>

      <Divider sx={{ my: 2 }} />

      <WaringModal.Content>
        <Button onClick={onClose} color="warning">
          Close
        </Button>

        <LoaderButton
          onClick={() => handlerFunc(categoryId)}
          isLoading={isLoading}
        >
          Delete
        </LoaderButton>
      </WaringModal.Content>
    </WaringModal>
  );
}
