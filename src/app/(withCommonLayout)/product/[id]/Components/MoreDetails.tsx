import { ICategory } from "@/types";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { Box, Grid, useMediaQuery } from "@mui/material";
import DescriptionHeader from "./DescriptionHeader";
import DetailedCategoryCard from "./DetaileCategroyCard";
import DetailedManufacturer from "./DetailedManufacturer";
import ProductDetailedDescription from "./ProductDetailedDescription";

interface IMoreDetailsProps {
  category: ICategory;
  manufacture: IManufacturer;
  detailedDescription: string;
}

export default function MoreDetails({
  category,
  manufacture: manufacturer,
  detailedDescription,
}: IMoreDetailsProps) {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box py={4}>
      <DescriptionHeader>Product Details</DescriptionHeader>

      {/* Detailed Description */}
      {detailedDescription && (
        <ProductDetailedDescription text={detailedDescription} />
      )}

      <Grid container spacing={3}>
        {/* Category Section */}
        <Grid item xs={12} md={6}>
          <DetailedCategoryCard category={category} />
        </Grid>

        {/* Manufacturer Section */}
        <Grid item xs={12} md={6}>
          <DetailedManufacturer manufacturer={manufacturer} />
        </Grid>
      </Grid>
    </Box>
  );
}
