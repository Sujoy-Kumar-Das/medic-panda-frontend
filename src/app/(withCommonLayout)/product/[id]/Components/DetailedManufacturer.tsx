import { IManufacturer } from "@/types/Imanufacturer.type";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Card, Chip, Divider, Typography } from "@mui/material";
export default function DetailedManufacturer({
  manufacturer,
}: {
  manufacturer: IManufacturer;
}) {
  console.log({ manufacturer });
  return (
    <Card
      sx={{
        borderRadius: "16px",
        p: 3,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
        height: "100%",
      }}
    >
      <Box display="flex" alignItems="center" mb={3}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1.5,
            borderRadius: "50%",
            backgroundColor: "primary.light",
            color: "primary.contrastText",
            mr: 2,
          }}
        >
          <BusinessIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          Manufacturer
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />

      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}
        >
          {manufacturer?.name}
        </Typography>

        {manufacturer?.description && (
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mb: 2, lineHeight: 1.6 }}
          >
            {manufacturer.description}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {manufacturer?.address && (
          <Box display="flex" alignItems="flex-start" sx={{ gap: 1.5 }}>
            <LocationOnIcon
              sx={{
                color: "primary.main",
                fontSize: 20,
                mt: 0.25,
              }}
            />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {manufacturer.address.state && `${manufacturer.address.state}, `}
              {manufacturer.address.city}, {manufacturer.address.state} {""},
              {manufacturer.address.country} - {manufacturer.address.zipCode}
            </Typography>
          </Box>
        )}

        {manufacturer?.contact && (
          <Box display="flex" alignItems="center" sx={{ gap: 1.5 }}>
            <PhoneIcon
              sx={{
                color: "primary.main",
                fontSize: 20,
              }}
            />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {manufacturer.contact}
            </Typography>
          </Box>
        )}
      </Box>

      <Box sx={{ mt: 2 }}>
        <Chip
          icon={<LanguageIcon />}
          label="Visit Website"
          variant="outlined"
          color="primary"
        />
      </Box>
    </Card>
  );
}
