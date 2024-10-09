import { getAllCategoriesService } from "@/services/actions/category.service";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Enhanced styles for the button
const buttonStyle = {
  fontSize: 14,
  padding: "8px 16px",
  borderRadius: "20px",
  backgroundColor: "#1976d2",
  color: "#fff",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#155a99",
  },
};

// Enhanced card style with flexbox and equal height
const cardStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
};

// Flex container for CardContent to push button to the bottom
const cardContentStyle = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
};

export default async function CategoriesPage() {
  const { data: categories } = await getAllCategoriesService(6);

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          mb={6}
          fontWeight="bold"
        >
          Browse by Category
        </Typography>
        <Grid container spacing={4}>
          {categories?.map((category) => (
            <Grid key={category._id} item xs={12} sm={6} md={4} lg={3}>
              <Card sx={cardStyle}>
                <CardMedia sx={{ height: 220, position: "relative" }}>
                  <Image
                    alt={`${category.name} image`}
                    src={category.thumbnail}
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                    style={{ borderRadius: "12px 12px 0 0" }}
                  />
                </CardMedia>
                <CardContent sx={cardContentStyle}>
                  <div>
                    <Typography
                      component="h2"
                      variant="h6"
                      color="text.primary"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {category.description ||
                        "Explore the best products in this category."}
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                    component={Link}
                    href={`/product?category=${category.name}`}
                  >
                    Explore {category.name}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
