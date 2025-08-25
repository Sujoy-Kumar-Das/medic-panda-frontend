import CategoryIcon from "@mui/icons-material/Category";
import { ICategory } from "@/types";
import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export default function DetailedCategoryCard({
  category,
}: {
  category: ICategory;
}) {
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
          <CategoryIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          Category
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Box display="flex" alignItems="center" sx={{ gap: 3 }}>
        <Avatar
          src={category?.thumbnail}
          alt={category?.name}
          sx={{
            width: 100,
            height: 100,
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Box>
          <Chip
            label={category?.name}
            color="primary"
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              py: 1,
              px: 2,
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mt: 1, maxWidth: 300 }}
          >
            {category.description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
