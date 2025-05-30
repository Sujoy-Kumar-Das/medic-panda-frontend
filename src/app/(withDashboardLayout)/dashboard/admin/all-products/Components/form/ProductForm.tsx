"use client";
import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import PandaSelect from "@/components/form/PandaSelect";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import { IProductFormProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import DiscountForm from "./DiscountForm";

export default function ProductForm({
  onSubmit,
  onClose,
  validationSchema,
  isLoading,
  type,
  defaultValues,
  manufacturer,
  categories,
  isDiscountAvailable,
}: IProductFormProps) {
  return (
    <PandaForm
      onSubmit={onSubmit}
      resolver={zodResolver(validationSchema)}
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
          <PandaSelect
            name="product.category"
            items={categories}
            label="Category"
          />
        </Grid>
        <Grid item xs={12}>
          <PandaSelect
            items={manufacturer}
            label="Manufacturer"
            name="product.manufacturer"
          />
        </Grid>

        {type === "create" && (
          <Grid item xs={12}>
            <PandaFileUploader
              name="product.thumbnail"
              label="Upload Product Image"
            />
          </Grid>
        )}

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
          <Button color="warning" onClick={onClose}>
            Close
          </Button>

          <LoaderButton
            type="submit"
            isLoading={isLoading}
            sxProps={{ minWidth: 200 }}
          >
            {type === "create" ? "Create" : "Edit"} Product
          </LoaderButton>
        </Grid>
      </Grid>
    </PandaForm>
  );
}
