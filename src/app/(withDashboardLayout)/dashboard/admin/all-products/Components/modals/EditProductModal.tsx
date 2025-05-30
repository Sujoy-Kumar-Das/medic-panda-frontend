"use client";
import FormModal from "@/components/modal/FormModal/FormModal";
import useEditProduct from "@/hooks/useEditProduct.hook";
import useProductDefaultValue from "@/hooks/useProductDefaultValue.hook";
import useSelectCategory from "@/hooks/useSelectCategory";
import useSelectManufacture from "@/hooks/useSelectManufacture";
import { updateProductValidationSchema } from "@/schemas/product-schema";
import { FieldValues } from "react-hook-form";
import ProductForm from "../form/ProductForm";

interface EditProductModalProps {
  productId: string;
  onModalClose: () => void;
}

export default function EditProductModal({
  productId,
  onModalClose,
}: EditProductModalProps) {
  const { handlerFunc, isLoading } = useEditProduct(onModalClose);

  const { items: categories } = useSelectCategory();
  const { items: manufacturer } = useSelectManufacture();

  const { defaultValues, isLoading: defaultValueLoading } =
    useProductDefaultValue({
      id: productId,
    });

  // check is the discount is available or not;
  const isDiscountAvailable = defaultValues.product.discount ? true : false;

  return (
    <FormModal
      title="Edit Product"
      subtitle="Modify the product details below and save changes"
      open
      onClose={onModalClose}
    >
      {!defaultValueLoading && (
        <ProductForm
          onSubmit={(data: FieldValues) => handlerFunc(productId, data)}
          isLoading={isLoading}
          defaultValues={defaultValues}
          onClose={onModalClose}
          type="edit"
          validationSchema={updateProductValidationSchema}
          categories={categories}
          manufacturer={manufacturer}
          isDiscountAvailable={isDiscountAvailable}
        />
      )}
    </FormModal>
  );
}
