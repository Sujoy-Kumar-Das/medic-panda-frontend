import CustomModal from "@/components/customModal/CustomModal";
import { useDeleteProductMutation } from "@/redux/api/product.api";
import { LoadingButton } from "@mui/lab";
import { Button, Stack, Typography } from "@mui/material";
import { Dispatch } from "react";
import { toast } from "sonner";

interface IDeleteModalProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

export default function DeleteProductModal({
  open,
  setOpen,
  id,
}: IDeleteModalProps) {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDeleteProduct = async () => {
    try {
      const res = await deleteProduct(id).unwrap();

      if (res?._id) {
        toast.success("Product Deleted Successfully.");
        setOpen((prev: boolean) => !prev);
      } else {
        toast.success("Failed to delete product.");
      }
    } catch (error) {
      toast.success("Something went wrong.");
    }
  };

  const handleCloseModal = () => {
    setOpen((prev: boolean) => !prev);
  };
  return (
    <CustomModal open={open} setOpen={setOpen} closeBtn={false}>
      <Typography component={"h1"} variant="h4" textAlign={"center"}>
        Are You Sure You Want to Delete!!!
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        justifyContent={"end"}
        mt={5}
      >
        <Button color="error" size="small" onClick={handleCloseModal}>
          Cancel
        </Button>
        <LoadingButton
          loading={isLoading}
          color="primary"
          size="small"
          onClick={handleDeleteProduct}
        >
          Yes
        </LoadingButton>
      </Stack>
    </CustomModal>
  );
}
