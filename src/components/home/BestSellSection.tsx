import { getAllProductService } from "@/services/actions/product.service";
import { IProduct } from "@/types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Chip,
  Container,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default async function BestSellSection() {
  const { data: products } = await getAllProductService(6);

  return (
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
            Everything You May Need
          </Typography>
          <Typography
            color={"primary.light"}
            fontWeight={"bold"}
            component={"h5"}
            variant="h3"
            textAlign={"center"}
          >
            Top Bestsellers
          </Typography>
        </Box>

        <Grid container spacing={3} mt={5}>
          {products.map((product: IProduct) => (
            <Grid key={product._id} item xs={12} md={4} position={"relative"}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                border={2}
                borderColor={"background.default"}
                borderRadius={8}
                px={3}
                py={1}
                sx={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover .show-buttons": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <Stack direction={"column"} spacing={1}>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Chip label="Discount" size="small" color="primary" />
                    <Chip
                      label={`${product.discount?.percentage} off`}
                      size="small"
                      color="secondary"
                    />
                  </Stack>
                  <Typography
                    fontWeight={400}
                    variant="h5"
                    color={"text.primary"}
                    component={"h1"}
                  >
                    {product.name}
                  </Typography>
                  <Box>
                    <Typography
                      fontWeight={400}
                      variant="body1"
                      component={"p"}
                      color={"text.secondary"}
                      sx={{
                        textDecoration: `${
                          product?.discount?.discountPrice
                            ? "line-through"
                            : "none"
                        }`,
                        display: "inline-block",
                      }}
                      marginRight={1}
                    >
                      {product.price}
                    </Typography>
                    <Typography
                      fontWeight={400}
                      variant="body1"
                      component={"h1"}
                      sx={{
                        display: `${
                          product?.discount?.discountPrice
                            ? "inline-block"
                            : "none"
                        }`,
                      }}
                    >
                      {product?.discount?.discountPrice}
                    </Typography>
                  </Box>
                  <Rating readOnly value={4} />
                </Stack>
                <Box sx={{ position: "relative" }}>
                  <Image
                    alt="product image"
                    src={product.thumbnail}
                    height={180}
                    width={180}
                  />
                  <Stack
                    className="show-buttons"
                    sx={{
                      position: "absolute",
                      top: "10%",
                      right: "0",
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                      opacity: 0,
                      transform: "translateY(100%)",
                      transitionProperty: "transform, opacity",
                      transitionDuration: "0.3s",
                      transitionTimingFunction: "ease",
                      transitionDelay: "0s",
                    }}
                  >
                    <IconButton
                      sx={{
                        color: "primary.main",
                        border: "1px solid #cccccc",
                        height: "40px",
                        width: "40px",
                        padding: "10px",
                        transitionProperty: "transform, opacity",
                        transitionDuration: "0.3s",
                        transitionTimingFunction: "ease",
                        transitionDelay: "0.1s",
                        "&:hover": {
                          color: "text.disabled",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton
                      sx={{
                        color: "primary.main",
                        border: "1px solid #cccccc",
                        height: "40px",
                        width: "40px",
                        padding: "10px",
                        transitionProperty: "transform, opacity",
                        transitionDuration: "0.3s",
                        transitionTimingFunction: "ease",
                        transitionDelay: "0.2s",
                        "&:hover": {
                          color: "text.disabled",
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                    <IconButton
                      sx={{
                        color: "primary.main",
                        border: "1px solid #cccccc",
                        height: "40px",
                        width: "40px",
                        padding: "10px",
                        transitionProperty: "transform, opacity",
                        transitionDuration: "0.3s",
                        transitionTimingFunction: "ease",
                        transitionDelay: "0.3s",
                        "&:hover": {
                          color: "text.disabled",
                          borderColor: "primary.main",
                        },
                      }}
                      component={Link}
                      href={`/products/${product._id}`}
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
