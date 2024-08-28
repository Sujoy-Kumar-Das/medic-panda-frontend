"use client";
import PandaDatePicker from "@/components/form/PandaDatePicker";
import PandaFileUploader from "@/components/form/PandaFileUpload";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import PandaSelect from "@/components/form/PandaSelect";
import PandaTimePicker from "@/components/form/PandaTimePikcer";
import { useGetAllCategoriesQuery } from "@/redux/api/category.api";
import { useGetAllManufactureQuery } from "@/redux/api/manufacture.api";
import { useCreateProductMutation } from "@/redux/api/product.api";
import { createProductSchema } from "@/schemas/product-schema";
import { dateFormatter } from "@/utils/date.formatter";
import { imageUploader } from "@/utils/imageUploader";
import { timeFormatter } from "@/utils/time.formatter";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function CreateProductPage() {
  const { data } = useGetAllCategoriesQuery(undefined);
  const { data: manufactures } = useGetAllManufactureQuery(undefined);
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const handleAddProduct = async (data: FieldValues) => {
    // upload the image
    data.thumbnail = await imageUploader(data.thumbnail);

    // format the date
    if (data?.percentage) {
      data.startDate = dateFormatter(data.startDate);
      data.endDate = dateFormatter(data.endDate);
      data.startTime = timeFormatter(data.startTime);
      data.endTime = timeFormatter(data.endTime);
    }

    // create the discount object
    const discount = {
      percentage: data.percentage,
      startDate: data.startDate,
      endDate: data.endDate,
      startTime: data.startTime,
      endTime: data.endTime,
    };

    // product data
    const productData = {
      product: {
        name: data.name,
        thumbnail: data.thumbnail,
        price: data.price,
        discount: discount.percentage ? discount : undefined,
      },
      productDetail: {
        category: data.category,
        manufacture: data.manufacture,
        description: data.description,
        stock: data.stock,
      },
    };

    try {
      const res = await createProduct(productData).unwrap();

      if (res?._id) {
        toast.success("Product created successfully.");
      } else {
        toast.error("Something went wrong while creating product.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while creating product.");
    }
  };

  const categoryItems = data?.map((category) => ({
    name: `${category.name.toUpperCase()}`,
    value: category?._id,
  }));

  const manufactureItems = manufactures?.map((manufacture) => ({
    name: `${manufacture.name.toUpperCase()}`,
    value: manufacture?._id,
  }));

  return (
    <Container>
      <Box sx={{ py: 5 }}>
        <PandaForm
          onSubmit={handleAddProduct}
          resolver={zodResolver(createProductSchema)}
        >
          <Stack direction={"column"} spacing={3}>
            <Box>
              <Typography variant="h5" component={"h5"}>
                Basic Information
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
                Pricing Information
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
              <Button color="primary" size="small" type="submit">
                Create
              </Button>
            </Stack>
          </Stack>
        </PandaForm>
      </Box>
    </Container>
  );
}
