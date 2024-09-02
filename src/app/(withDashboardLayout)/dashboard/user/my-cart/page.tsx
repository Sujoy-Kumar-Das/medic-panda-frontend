"use client";
import {
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/features/cart.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function MyCartPage() {
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.cart);

  const handleIncrementQuantity = (id: string) => {
    console.log(id);
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box mb={4} textAlign="center">
        <Typography
          component="h1"
          variant="h4"
          color="text.primary"
          fontWeight={700}
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            textTransform: "uppercase",
            letterSpacing: "0.1rem",
          }}
        >
          My Cart
        </Typography>
        <Typography
          component="h2"
          variant="subtitle1"
          color="text.secondary"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            marginTop: "8px",
            letterSpacing: "0.05rem",
          }}
        >
          Track, return, or purchase items
        </Typography>
        <Divider sx={{ mt: 2, mb: 3 }} />
      </Box>

      <Stack direction={"column"} spacing={3}>
        {carts.map((cart) => (
          <Box
            key={cart.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 4,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              },
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} md={2}>
                <Image
                  alt="thumbnail"
                  src={cart.thumbnail}
                  height={100}
                  width={100}
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Grid>

              <Grid item xs={12} md={2}>
                <Typography
                  fontWeight={600}
                  fontSize="1rem"
                  color="text.primary"
                >
                  {cart.name}
                </Typography>
                <Typography fontSize="0.9rem" color="text.secondary">
                  {cart.category}
                </Typography>
              </Grid>

              <Grid item xs={12} md={2}>
                <Typography
                  fontWeight={600}
                  fontSize="1rem"
                  color="text.primary"
                >
                  Price
                </Typography>
                <Typography fontSize="0.9rem" color="text.secondary">
                  ${cart.price}
                </Typography>
              </Grid>

              <Grid item xs={12} md={2}>
                <Typography
                  fontWeight={600}
                  fontSize="1rem"
                  color="text.primary"
                >
                  Quantity
                </Typography>
                <Typography fontSize="0.9rem" color="text.secondary">
                  {cart.quantity}
                </Typography>
              </Grid>

              <Grid item xs={12} md={2}>
                <Typography
                  fontWeight={600}
                  fontSize="1rem"
                  color="text.primary"
                >
                  Total
                </Typography>
                <Typography fontSize="0.9rem" color="text.secondary">
                  ${cart.totalPrice}
                </Typography>
              </Grid>

              <Grid item xs={12} md={2}>
                <Stack direction="row" spacing={1} justifyContent="center">
                  <IconButton
                    color="primary"
                    sx={{
                      borderRadius: 1,
                      bgcolor: "primary.light",
                      color: "white",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                    onClick={() => handleIncrementQuantity(cart.id)}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    sx={{
                      borderRadius: 1,
                      bgcolor: "secondary.light",
                      color: "white",
                      "&:hover": {
                        bgcolor: "secondary.dark",
                      },
                    }}
                    onClick={() => handleDecrementQuantity(cart.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              component={Link}
              href="/order-status"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: { xs: 2, md: 0 },
                background: "primary.main",
                color: "text.disabled",
                paddingX: 4,
                paddingY: 1.5,
                fontWeight: 600,
                borderRadius: 3,
                boxShadow:
                  "0px 3px 5px -1px rgba(0,123,255,0.2), 0px 6px 10px 0px rgba(0,123,255,0.14), 0px 1px 18px 0px rgba(0,123,255,0.12)",
                transition: "background 0.3s ease, transform 0.3s ease",
                whiteSpace: "nowrap", // Ensures the text stays on one line
                "&:hover": {
                  background: "primary.dark",
                  transform: "translateY(-2px)",
                  boxShadow:
                    "0px 5px 15px -3px rgba(0,123,255,0.2), 0px 8px 20px 2px rgba(0,123,255,0.14), 0px 3px 22px 4px rgba(0,123,255,0.12)",
                },
                alignSelf: "center", // Center align the button
              }}
            >
              Order Now
            </Button>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
