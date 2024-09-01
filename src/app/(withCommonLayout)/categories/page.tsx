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

export default async function CategoriesPage() {
  const { data: categories } = await getAllCategoriesService(6);

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {categories?.map((category) => (
            <Grid key={category._id} item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia sx={{ height: 200, position: "relative" }}>
                  <Image
                    alt={`${category.name} image`}
                    src={category.thumbnail}
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                    style={{ borderRadius: "8px 8px 0 0" }}
                  />
                </CardMedia>
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Typography
                    component="h2"
                    variant="h6"
                    color="text.primary"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {category.name}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ fontSize: 12 }}
                    component={Link}
                    href={`/product?category=${category.name}`}
                  >
                    Show Products
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
