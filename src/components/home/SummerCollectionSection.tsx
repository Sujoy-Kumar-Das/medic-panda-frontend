import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import SummerCard from "../ui/card/SummerCard";

export default async function SummerCollectionSection() {
  const { data: products } = await getAllProductService({ limit: 9 });

  return (
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
            All You May Need
          </Typography>
          <Typography
            color={"primary.light"}
            fontWeight={"bold"}
            component={"h2"} // Changed from h5 to h2 for SEO hierarchy
            variant="h3"
            textAlign={"center"}
          >
            Summer Skin Products
          </Typography>
        </Box>

        <Stack
          sx={{ marginTop: 5 }}
          direction={{ xs: "column", md: "row" }} // Make it responsive to stack vertically on smaller screens
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          spacing={3}
        >
          <Box
            height={"90vh"}
            width={{ xs: "100%", md: "40%" }}
            sx={{
              position: "relative",
              backgroundImage:
                'url("https://vitasana.qodeinteractive.com/wp-content/uploads/2024/04/h1-img-2-new.jpg")',
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
              <Typography variant="h5" component={"p"} color={"text.disabled"}>
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

          <Box sx={{ width: { xs: "100%", md: "60%" } }}>
            <Grid container spacing={2}>
              {" "}
              {/* Increased spacing for better visuals */}
              {products.map((product: IProduct) => (
                <Grid item xs={12} sm={6} md={4} key={product._id}>
                  <SummerCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
