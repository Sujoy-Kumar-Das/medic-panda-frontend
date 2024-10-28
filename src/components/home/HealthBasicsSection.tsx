import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types";
import { Box, Container, Grid, Typography } from "@mui/material";
import BestSellerCard from "../ui/card/BestSellerCard";

export default async function HealthBasicsSection() {
  const { data: products } = await getAllProductService({
    limit: 6,
    category: "Health Basics",
  });

  return (
    <>
      {products?.length && (
        <Box>
          <Container sx={{ py: 10 }}>
            <Box>
              <Typography
                color={"primary.light"}
                fontWeight={500}
                component={"h1"}
                variant="h5"
                textAlign={"center"}
                mb={1}
              >
                Simple Steps to a Healthier You
              </Typography>
              <Typography
                color={"primary.light"}
                fontWeight={"bold"}
                component={"h5"}
                variant="h3"
                textAlign={"center"}
              >
                Health Basics
              </Typography>
            </Box>

            <Grid container spacing={3} mt={5}>
              {products.map((product: IProduct) => (
                <Grid
                  key={product._id}
                  item
                  xs={12}
                  md={4}
                  position={"relative"}
                >
                  <BestSellerCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
}
