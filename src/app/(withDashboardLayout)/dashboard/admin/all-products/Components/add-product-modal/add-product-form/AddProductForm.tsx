import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { createProductValidationSchema } from "@/schemas/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import AddProductManufacturer from "./AddProductManufacturer";
import AddProductSelectCategory from "./AddProductSelectCategory";
import DiscountForm from "./DiscountForm";
import useCreateProductHook from "./hooks/useCreateProductHook";

export default function AddProductForm({ onClose }: { onClose: () => void }) {
  const { handleCreatedProduct, isLoading } = useCreateProductHook();

  const handleAddProduct = async (values: FieldValues) => {
    // await handleCreatedProduct(values, onClose);
    console.log(values);
  };

  return (
    <PandaForm
      onSubmit={handleAddProduct}
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
          <Button
            variant="outlined"
            color="secondary"
            type="button"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Product"}
          </Button>
        </Grid>
      </Grid>
    </PandaForm>
  );
}
