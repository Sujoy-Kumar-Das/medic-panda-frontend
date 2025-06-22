"use client";
import FormModal from "@/components/modal/FormModal/FormModal";
import useCreateProduct from "@/hooks/useCreateProduct";
import useProductDefaultValue from "@/hooks/useProductDefaultValue.hook";
import useSelectCategory from "@/hooks/useSelectCategory";
import useSelectManufacture from "@/hooks/useSelectManufacture";
import { createProductValidationSchema } from "@/schemas/product-schema";
import ProductForm from "../../form/ProductForm";
interface AddProductModalProps {
  onClose: () => void;
}

export default function AddProductModal({ onClose }: AddProductModalProps) {
  const { handlerFunc, isLoading } = useCreateProduct(onClose);

  const { items: categories } = useSelectCategory();
  const { items: manufacturer } = useSelectManufacture();

  const { defaultValues } = useProductDefaultValue({
    id: null,
  });

  if (!categories || !manufacturer) return null;

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
        defaultValues={defaultValues}
        onClose={onClose}
        type="create"
        validationSchema={createProductValidationSchema}
        categories={categories}
        manufacturer={manufacturer}
        isDiscountAvailable={false}
      />
    </FormModal>
  );
}
