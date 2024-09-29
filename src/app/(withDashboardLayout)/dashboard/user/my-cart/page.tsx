"use client";
import Header from "@/components/shared/header/Header";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { useGetAllCartProductsQuery } from "@/redux/api/addToCart.api";
import {
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { keyframes } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

export default function MyCartPage() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllCartProductsQuery(undefined);

  const handleIncrementQuantity = (id: string) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decreaseQuantity({ id }));
  };

  const carts = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  if (!carts?.length) {
    return (
      <NoDataFound
        link="/product"
        message="Your cart is currently empty"
        text="Continue Shopping"
      />
    );
  }

  return (
    <Container>
      <Header
        title="My Cart"
        subtitle="Review your cart before placing the order"
      />

      <Stack direction={"column"} spacing={3}>
        {carts?.map((cart, index) => (
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
              animation: `${fadeInUp} 0.4s ease ${index * 0.1}s both`,
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
                  src={cart?.product?.thumbnail}
                  height={120}
                  width={120}
                  style={{
                    borderRadius: "16px",
                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
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
                  ${cart?.product?.price}
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
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                        bgcolor: "primary.dark",
                      },
                    }}
                    onClick={() => handleIncrementQuantity(cart.id)}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    sx={{
                      borderRadius: 1,
                      bgcolor: "secondary.light",
                      color: "white",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
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
              href={`/dashboard/user/check-out/${cart._id}`}
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: { xs: 2, md: 0 },
                background: "primary.main",
                color: "white",
                paddingX: 4,
                paddingY: 1.5,
                fontWeight: 600,
                borderRadius: 3,
                boxShadow:
                  "0px 3px 5px -1px rgba(0,123,255,0.2), 0px 6px 10px 0px rgba(0,123,255,0.14), 0px 1px 18px 0px rgba(0,123,255,0.12)",
                transition: "background 0.3s ease, transform 0.3s ease",
                whiteSpace: "nowrap",
                "&:hover": {
                  background: "primary.dark",
                  transform: "translateY(-2px)",
                  boxShadow:
                    "0px 5px 15px -3px rgba(0,123,255,0.2), 0px 8px 20px 2px rgba(0,123,255,0.14), 0px 3px 22px 4px rgba(0,123,255,0.12)",
                },
                alignSelf: "center",
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
