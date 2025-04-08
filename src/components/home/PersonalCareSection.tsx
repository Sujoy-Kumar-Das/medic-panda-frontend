import summerCollectionBg from "@/assets/summer-collection-bg.jpg";
import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ProductSimpleAnimatedCard from "../ui/card/SimpleAnimatedCard";

export default async function PersonalCareSection() {
  const { data } = await getAllProductService({
    limit: 6,
    category: "Personal Care",
  });

  const products = data?.result;

  return (
    <>
      {products?.length && (
        <Box height={"100%"} width={"100%"} bgcolor={"background.default"}>
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
                A Fresh Start Every Day
              </Typography>
              <Typography
                color={"primary.light"}
                fontWeight={"bold"}
                component={"h2"}
                variant="h3"
                textAlign={"center"}
              >
                Personal Care
              </Typography>
            </Box>

            <Stack
              sx={{ marginTop: 5 }}
              direction={{ xs: "column", md: "row" }}
              justifyContent={"space-between"}
              alignItems={"stretch"}
              spacing={3}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  position: "relative",
                  backgroundImage: `url(${summerCollectionBg.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h5"
                    component={"p"}
                    color={"text.disabled"}
                  >
                    Everything you may need
                  </Typography>
                  <Typography
                    variant="h3"
                    component={"h1"}
                    color={"text.disabled"}
                    fontWeight={"bold"}
                  >
                    SUMMER <br /> TIME
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"flex-end"}
                  >
                    <Typography
                      variant="h6"
                      component={"p"}
                      color={"text.disabled"}
                      width={{ xs: "100%", md: "50%" }}
                    >
                      Natural spiraling pills daily dose
                    </Typography>
                    <Box>
                      <Typography
                        variant="body1"
                        component={"p"}
                        color={"text.disabled"}
                      >
                        Before $76
                      </Typography>
                      <Typography
                        variant="h3"
                        component={"h1"}
                        color={"text.disabled"}
                        fontWeight={"bold"}
                      >
                        $37
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>

              <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
                <Grid container spacing={2}>
                  {/* Increased spacing for better visuals */}
                  {products.map((product: IProduct) => (
                    <Grid item xs={12} sm={6} md={4} key={product._id}>
                      <ProductSimpleAnimatedCard product={product} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </Container>
        </Box>
      )}
    </>
  );
}
