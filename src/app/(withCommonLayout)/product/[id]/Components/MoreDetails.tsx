import { ICategory } from "@/types";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { IVariant } from "@/types/IVariant";
import CategoryIcon from "@mui/icons-material/Category";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";

interface IMoreDetailsProps {
  category: ICategory;
  manufacture: IManufacturer;
  variant: IVariant;
}

export default function MoreDetails({
  category,
  variant,
  manufacture: manufacturer,
}: IMoreDetailsProps) {
  return (
    <Box py={2}>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        More Details
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" mb={2}>
            <CategoryIcon color="primary" sx={{ marginRight: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Category
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
            <Avatar
              src={category.thumbnail}
              alt={category.name}
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
              }}
            />
            <Typography variant="body1">{category.name}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Variant
          </Typography>
          <Typography variant="body1">{variant?.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {variant?.quantity} units
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Manufacturer
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {manufacturer?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {manufacturer?.address.city}, {manufacturer?.address.state},{" "}
            {manufacturer?.address.country} - {manufacturer?.address.zipCode}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contact: {manufacturer?.contact}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {manufacturer?.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
