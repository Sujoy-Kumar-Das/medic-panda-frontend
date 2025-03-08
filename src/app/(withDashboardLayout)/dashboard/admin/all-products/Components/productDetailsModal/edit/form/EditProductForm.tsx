import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { updateProductValidationSchema } from "@/schemas/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import DiscountForm from "./DiscountForm";
import EditProductManufacturer from "./EditProductManufacturer";
import EditProductSelectCategory from "./EditProductSelectCategory";
import useEditProduct from "./hooks/useEditProduct.hook";
import useEditProductDefaultValue from "./hooks/useEditProductDefaultValue.hook";

export default function EditProductForm({
  productId,
  onClose,
}: {
  productId: string;
  onClose: () => void;
}) {
  // todo -> make the create and update zod schema correct
  const { defaultValues, isLoading } = useEditProductDefaultValue({
    id: productId,
  });

  const { handleUpdateProductData, isLoading: updatingLoader } =
    useEditProduct();

  const handleAddProduct = async (values: FieldValues) => {
    // await handleUpdateProductData(productId, values);
    console.log(values);
  };

  // check is the discount is available or not;
  const isDiscountAvailable = defaultValues.product.discount ? true : false;

  return (
    <>
      {!isLoading && (
        <PandaForm
          // resolver={zodResolver(updateProductValidationSchema)}
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
              <Button
                variant="outlined"
                color="secondary"
                type="button"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Edit
              </Button>
            </Grid>
          </Grid>
        </PandaForm>
      )}
    </>
  );
}
