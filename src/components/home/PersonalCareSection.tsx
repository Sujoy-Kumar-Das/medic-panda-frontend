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
        <Box
          width={"100%"}
          bgcolor={"background.default"}
          py={{ xs: 6, md: 10 }}
          px={{ xs: 2, sm: 0 }}
        >
          <Container>
            <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
              <Typography
                color={"primary.light"}
                fontWeight={500}
                component={"h1"}
                variant="h5"
                mb={1}
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem" },
                }}
              >
                A Fresh Start Every Day
              </Typography>
              <Typography
                color={"primary.light"}
                fontWeight={"bold"}
                component={"h2"}
                variant="h3"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  lineHeight: 1.2,
                }}
              >
                Personal Care
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", lg: "row" }}
              justifyContent={"space-between"}
              alignItems={{ xs: "center", lg: "stretch" }}
              spacing={{ xs: 3, md: 4 }}
            >
              {/* Promo Banner */}
              <Box
                sx={{
                  width: { xs: "100%", lg: "38%" },
                  minHeight: { xs: 300, sm: 400, lg: "auto" },
                  position: "relative",
                  backgroundImage: `url(${summerCollectionBg.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2, sm: 3 },
                    backgroundColor: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <Typography
                    variant="h5"
                    component={"p"}
                    color={"common.white"}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    Everything you may need
                  </Typography>
                  <Typography
                    variant="h3"
                    component={"h1"}
                    color={"common.white"}
                    fontWeight={"bold"}
                    sx={{
                      fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    SUMMER <br /> TIME
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: { xs: 2, sm: 3 },
                    backgroundColor: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"flex-end"}
                    spacing={1}
                  >
                    <Typography
                      variant="h6"
                      component={"p"}
                      color={"common.white"}
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        width: { xs: "60%", sm: "50%" },
                      }}
                    >
                      Natural spiraling pills daily dose
                    </Typography>
                    <Box textAlign="right">
                      <Typography
                        variant="body1"
                        component={"p"}
                        color={"text.disabled"}
                        sx={{ textDecoration: "line-through" }}
                      >
                        Before $76
                      </Typography>
                      <Typography
                        variant="h3"
                        component={"h1"}
                        color={"common.white"}
                        fontWeight={"bold"}
                        sx={{
                          fontSize: { xs: "1.75rem", sm: "2.25rem" },
                        }}
                      >
                        $37
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>

              {/* Products Grid */}
              <Box
                sx={{
                  width: { xs: "100%", lg: "60%" },
                  pl: { lg: 4 },
                }}
              >
                <Grid container spacing={{ xs: 2, md: 3 }}>
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
