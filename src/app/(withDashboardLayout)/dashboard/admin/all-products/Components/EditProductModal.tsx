import CustomModal from "@/components/customModal/CustomModal";
import PandaDatePicker from "@/components/form/PandaDatePicker";
import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import PandaSelect from "@/components/form/PandaSelect";
import PandaTimePicker from "@/components/form/PandaTimePikcer";
import { useGetAllCategoriesQuery } from "@/redux/api/category.api";
import { useGetAllManufactureQuery } from "@/redux/api/manufacture.api";
import { useGetSingleProductQuery } from "@/redux/api/product.api";
import { createProductSchema } from "@/schemas/product-schema";
import { ICategory } from "@/types";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { Dispatch, useEffect } from "react";

interface IEditModalProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

export default function EditProductModal({
  open,
  setOpen,
  id,
}: IEditModalProps) {
  const { data: categories } = useGetAllCategoriesQuery(undefined);
  const { data: manufactures } = useGetAllManufactureQuery(undefined);
  const { data, isLoading, isSuccess } = useGetSingleProductQuery(id);

  const handleEditProduct = async () => {
    console.log("edit product");
  };

  const handleCloseModal = () => {
    setOpen((prev: boolean) => !prev);
  };

  const categoryItems = categories?.map((category: ICategory) => ({
    name: `${category.name.toUpperCase()}`,
    value: category?._id,
  }));

  const manufactureItems = manufactures?.map((manufacture: IManufacturer) => ({
    name: `${manufacture.name.toUpperCase()}`,
    value: manufacture?._id,
  }));

  useEffect(() => {
    if (!isSuccess) {
      return;
    }
  }, [isSuccess]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <CustomModal open={open} setOpen={setOpen} closeBtn={false} modalWidth="lg">
      <PandaForm
        onSubmit={handleEditProduct}
        resolver={zodResolver(createProductSchema)}
        defaultValues={isSuccess ? data : {}}
      >
        <Stack direction={"column"} spacing={3}>
          <Box>
            <Typography variant="h5" component={"h5"}>
              Edit Basic Information
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <PandaInputField
                  name="name"
                  type="text"
                  label="Product Name"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <PandaSelect
                  name="category"
                  label="Category"
                  fullWidth
                  items={categoryItems}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <PandaSelect
                  name="manufacture"
                  label="Manufacture"
                  fullWidth
                  items={manufactureItems}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <PandaInputField
                  name="stock"
                  type="number"
                  label="Stock"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <PandaInputField
                  name="description"
                  label="Description"
                  type="text"
                  fullWidth
                  multiline={true}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PandaFileUploader name="thumbnail" label="Thumbnail" />
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Typography variant="h5" component={"h5"}>
              Edit Pricing Information
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <PandaInputField
                  name="price"
                  type="number"
                  label="Price"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PandaInputField
                  name="percentage"
                  label="Discount Percentage"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PandaDatePicker
                  name="startDate"
                  label="Start Discount"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PandaDatePicker
                  name="endDate"
                  label="Discount End Date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PandaTimePicker
                  name="startTime"
                  label="Discount Start Time"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PandaTimePicker
                  name="endTime"
                  label="Discount End Time"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={"end"}
            mt={5}
          >
            <Button color="error" size="small" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button color="primary" size="small" type="submit">
              Create
            </Button>
          </Stack>
        </Stack>
      </PandaForm>
    </CustomModal>
  );
}
