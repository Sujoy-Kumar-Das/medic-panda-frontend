import ManufacturerSlider from "@/lib/sliders/ManufacturerSlider";
import { getAllManufactureService } from "@/services/actions/manufactures.service";
import { Box, Container, Typography } from "@mui/material";

export default async function BrandSection() {
  const manufacturers = await getAllManufactureService(6);

  console.log({ manufacturers });

  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <Box mb={5}>
          <Typography
            color={"primary.light"}
            fontWeight={500}
            component={"h1"}
            variant="h5"
            textAlign={"center"}
            mb={1}
          >
            Brands We Sell{" "}
          </Typography>
          <Typography
            color={"primary.light"}
            fontWeight={"bold"}
            component={"h5"}
            variant="h3"
            textAlign={"center"}
          >
            Top Products, Trusted Brands
          </Typography>
        </Box>

        <ManufacturerSlider data={manufacturers?.data?.result} />
      </Container>
    </Box>
  );
}
