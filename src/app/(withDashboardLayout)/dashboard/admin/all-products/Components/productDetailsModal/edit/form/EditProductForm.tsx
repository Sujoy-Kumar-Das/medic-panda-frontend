import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CancelButton from "@/components/ui/buttons/CancelButton";
import useEditProduct from "@/hooks/useEditProduct.hook";
import useEditProductDefaultValue from "@/hooks/useEditProductDefaultValue.hook";
import { updateProductValidationSchema } from "@/schemas/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import DiscountForm from "./DiscountForm";
import EditProductManufacturer from "./EditProductManufacturer";
import EditProductSelectCategory from "./EditProductSelectCategory";

export default function EditProductForm({
  productId,
  onClose,
}: {
  productId: string;
  onClose: () => void;
}) {
  // get the default value of product;
  const { defaultValues, isLoading } = useEditProductDefaultValue({
    id: productId,
  });

  const { handlerFunc, isLoading: updatingLoader } = useEditProduct(onClose);

  const handleAddProduct = async (values: FieldValues) => {
    await handlerFunc(productId, values);
  };

  // check is the discount is available or not;
  const isDiscountAvailable = defaultValues.product.discount ? true : false;

  return (
    <>
      {!isLoading && (
        <PandaForm
          resolver={zodResolver(updateProductValidationSchema)}
          onSubmit={handleAddProduct}
          defaultValues={defaultValues}
        >
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <PandaInputField
                name="product.name"
                type="text"
                label="Product Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PandaInputField
                name="product.price"
                type="number"
                label="Price ($)"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PandaInputField
                name="productDetail.stock"
                type="number"
                label="Stock"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <EditProductSelectCategory />
            </Grid>
            <Grid item xs={12}>
              <EditProductManufacturer />
            </Grid>

            {/* discount form */}
            <DiscountForm isDiscountAvailable={isDiscountAvailable} />

            <Grid item xs={12}>
              <PandaInputField
                name="productDetail.description"
                label="Product Description"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-end" },
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <CancelButton onClose={onClose}>Cancel</CancelButton>

              <LoadingButton
                loading={updatingLoader}
                type="submit"
                loadingIndicator="Updating..."
                disabled={isLoading}
              >
                Update
              </LoadingButton>
            </Grid>
          </Grid>
        </PandaForm>
      )}
    </>
  );
}
