"use client";
import WaringModal from "@/components/modal/warning-modal/WarningModal";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useDeleteProduct from "@/hooks/useDeleteProduct.hook";
import { Button, Divider } from "@mui/material";

interface DeleteProductModalProps {
  onModalClose: () => void;
  productId: string;
}

export default function DeleteProductModal({
  onModalClose,
  productId,
}: DeleteProductModalProps) {
  const { handlerFunc, isLoading } = useDeleteProduct(onModalClose);

  return (
    <WaringModal open onClose={onModalClose}>
      <WaringModal.Title>
        Are you sure you want to delete this product?
      </WaringModal.Title>

      <WaringModal.Message>
        Deleting this product is permanent and cannot be undone. Please confirm
        your action.
      </WaringModal.Message>

      <Divider sx={{ my: 2 }} />

      <WaringModal.Content>
        <Button onClick={onModalClose} color="warning">
          Close
        </Button>

        <LoaderButton
          isLoading={isLoading}
          onClick={() => handlerFunc(productId)}
        >
          Delete
        </LoaderButton>
      </WaringModal.Content>
    </WaringModal>
  );
}
