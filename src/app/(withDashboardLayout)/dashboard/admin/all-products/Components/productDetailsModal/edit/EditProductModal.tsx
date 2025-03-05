import CustomModal from "@/components/modal/customModal/CustomModal";
import EditProductHeader from "./EditProductHeader";
import EditProductForm from "./form/EditProductForm";

export default function EditProductModal({
  productId,
  open,
  setOpen,
  onClose,
}) {
  return (
    <CustomModal open={open} setOpen={setOpen}>
      <EditProductHeader onClose={onClose} />
      <EditProductForm onClose={onClose} productId={productId} />
    </CustomModal>
  );
}
