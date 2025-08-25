"use client";
import FormModal from "@/components/modal/FormModal/FormModal";
import useCreateProduct from "@/hooks/useCreateProduct";
import { createProductValidationSchema } from "@/schemas/product-schema";
import { createProductDefaultValue } from "../../default-value";
import ProductForm from "../../form/ProductForm";
interface AddProductModalProps {
  onClose: () => void;
}

export default function AddProductModal({ onClose }: AddProductModalProps) {
  const { handlerFunc, isLoading } = useCreateProduct(onClose);

  return (
    <FormModal
      title="Add New Product"
      subtitle="Fill out the details below to add a new product"
      open={true}
      onClose={onClose}
    >
      <ProductForm
        onSubmit={handlerFunc}
        isLoading={isLoading}
        defaultValues={createProductDefaultValue}
        onClose={onClose}
        type="create"
        validationSchema={createProductValidationSchema}
        isDiscountAvailable={false}
      />
    </FormModal>
  );
}
