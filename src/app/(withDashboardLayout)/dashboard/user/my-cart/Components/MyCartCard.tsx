"use client";
import {
  useIncrementCartProductMutation,
  useRemoveCartProductMutation,
} from "@/redux/api/addToCart.api";
import { ICart, IGenericErrorResponse } from "@/types";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Grid,
  IconButton,
  keyframes,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";

// Fade-in animation for card appearance
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

// Scale-up animation for hover effect
const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

export default function MyCartCard({
  cart,
  index,
}: {
  cart: ICart;
  index: number;
}) {
  // increment hook
  const [incrementQuantity, { isLoading, isError, error }] =
    useIncrementCartProductMutation();
  // decrement hook
  const [
    decrementQuantity,
    {
      isLoading: decrementLoader,
      isError: isDecrementError,
      error: decrementError,
    },
  ] = useRemoveCartProductMutation();

  const handleIncrementQuantity = async (id: string) => {
    await incrementQuantity({ id });
  };

  const handleDecrementQuantity = async (id: string) => {
    await decrementQuantity({
      product: id,
    }).unwrap();
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as IGenericErrorResponse).message);
    } else if (isDecrementError) {
      toast.error((decrementError as IGenericErrorResponse).message);
    }
  }, [isError, error, isDecrementError, decrementError]);

  return (
    <Box
      key={cart._id}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "background.paper",
        p: 3,
        borderRadius: 4,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        animation: `${fadeInUp} 0.4s ease ${
          index * 0.1
        }s both, ${scaleUp} 0.3s ease-out`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
        },
        textAlign: "center",
      }}
    >
      <Grid container spacing={3} alignItems="center" justifyContent="center">
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
          <Typography fontWeight={600} fontSize="1rem" color="text.primary">
            {cart.product.name}
          </Typography>
          <Typography fontSize="0.9rem" color="text.secondary">
            {cart.product.name || "category"}
          </Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography fontWeight={600} fontSize="1rem" color="text.primary">
            Price
          </Typography>
          <Typography fontSize="0.9rem" color="text.secondary">
            ${cart?.product?.price}
          </Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography fontWeight={600} fontSize="1rem" color="text.primary">
            Quantity
          </Typography>
          <Typography fontSize="0.9rem" color="text.secondary">
            {cart.quantity}
          </Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography fontWeight={600} fontSize="1rem" color="text.primary">
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
              disabled={isLoading}
              onClick={() => handleIncrementQuantity(cart._id)}
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
              disabled={decrementLoader}
              onClick={() => handleDecrementQuantity(cart.product._id)}
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
  );
}
