import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import CancelButton from "@/components/ui/buttons/CancelButton";
import useCreateProductHook from "@/hooks/useCreateProductHook";
import { createProductValidationSchema } from "@/schemas/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Grid } from "@mui/material";
import AddProductManufacturer from "./AddProductManufacturer";
import AddProductSelectCategory from "./AddProductSelectCategory";
import DiscountForm from "./DiscountForm";

export default function AddProductForm({ onClose }: { onClose: () => void }) {
  const { handlerFunc, isLoading } = useCreateProductHook(onClose);

  return (
    <PandaForm
      onSubmit={handlerFunc}
      resolver={zodResolver(createProductValidationSchema)}
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
          <AddProductSelectCategory />
        </Grid>
        <Grid item xs={12}>
          <AddProductManufacturer />
        </Grid>
        <Grid item xs={12}>
          <PandaFileUploader
            name="product.thumbnail"
            label="Upload Product Image"
          />
        </Grid>

        {/* discount form */}
        <DiscountForm />

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
            type="submit"
            loading={isLoading}
            loadingIndicator="Creating Product..."
            disabled={isLoading}
          >
            Create Product
          </LoadingButton>
        </Grid>
      </Grid>
    </PandaForm>
  );
}
