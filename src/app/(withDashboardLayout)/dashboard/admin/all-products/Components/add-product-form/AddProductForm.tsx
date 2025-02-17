import PandaDatePicker from "@/components/form/PandaDatePicker";
import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import PandaTimePicker from "@/components/form/PandaTimePikcer";
import { Button, Grid } from "@mui/material";
import AddProductManufacturer from "./AddProductManufacturer";
import AddProductSelectCategory from "./AddProductSelectCategory";

export default function AddProductForm({ onClose }: { onClose: () => void }) {
  return (
    <PandaForm>
      <Grid container spacing={2} mt={2}>
        {/* Product Name */}
        <Grid item xs={12}>
          <PandaInputField
            name="name"
            type="text"
            label="Product Name"
            fullWidth
          />
        </Grid>

        {/* Price */}
        <Grid item xs={12} sm={6}>
          <PandaInputField
            name="price"
            type="number"
            label="Price ($)"
            fullWidth
          />
        </Grid>

        {/* Stock */}
        <Grid item xs={12} sm={6}>
          <PandaInputField
            name="productDetail.stock"
            type="number"
            label="Stock"
            fullWidth
          />
        </Grid>

        {/* Category */}
        <Grid item xs={12}>
          <AddProductSelectCategory />
        </Grid>

        {/* Manufacturer */}
        <Grid item xs={12}>
          <AddProductManufacturer />
        </Grid>

        {/* Thumbnail Upload */}
        <Grid item xs={12}>
          <PandaFileUploader name="thumbnail" label="Upload Product Image" />
        </Grid>

        {/* Discount Percentage */}
        <Grid item xs={12} sm={6}>
          <PandaInputField
            name="discount.percentage"
            label="Discount (%)"
            fullWidth
          />
        </Grid>

        {/* Discount Date Range */}
        <Grid item xs={12} sm={6}>
          <PandaDatePicker name="discount.startDate" label="Start Date" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PandaDatePicker name="discount.endDate" label="End Date" />
        </Grid>

        {/* Discount Time Range */}
        <Grid item xs={12} sm={6}>
          <PandaTimePicker name="discount.startTime" label="Start Time" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PandaTimePicker name="discount.endTime" label="End Time" />
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <PandaInputField
            name="productDetail.description"
            label="Product Description"
            multiline
            rows={4}
            fullWidth
          />
        </Grid>

        {/* Submit & Cancel Buttons */}
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
            size="large"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" size="large">
            Add Product
          </Button>
        </Grid>
      </Grid>
    </PandaForm>
  );
}
