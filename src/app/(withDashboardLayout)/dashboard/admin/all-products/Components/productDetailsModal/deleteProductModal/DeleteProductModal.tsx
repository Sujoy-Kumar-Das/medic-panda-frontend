import CustomModal from "@/components/customModal/CustomModal";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import useDeleteProduct from "./useDeleteProduct";

interface DeleteProductModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  productId: string;
  onClose: () => void;
}

export default function DeleteProductModal({
  open,
  setOpen,
  productId,
  onClose,
}: DeleteProductModalProps) {
  const { handleDeleteProduct, isLoading } = useDeleteProduct();

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id: string) => {
    await handleDeleteProduct(id);
    handleClose();
    onClose();
  };

  return (
    <CustomModal open={open} setOpen={setOpen}>
      <Box sx={{ p: 4, maxWidth: 500, width: "100%", mx: "auto" }}>
        {/* Modal Title */}
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Are you sure you want to delete this product?
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Modal Content */}
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            Deleting this product is permanent and cannot be undone. Please
            confirm your action.
          </Typography>
        </Stack>

        {/* Modal Action Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClose}
            sx={{ width: 120 }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(productId)}
            sx={{ width: 120 }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Delete"
            )}
          </Button>
        </Stack>
      </Box>
    </CustomModal>
  );
}
