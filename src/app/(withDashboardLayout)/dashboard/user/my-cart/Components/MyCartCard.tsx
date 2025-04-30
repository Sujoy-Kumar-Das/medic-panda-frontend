import useUpdateCartQuantity from "@/hooks/useUpdateCartQuantity";
import { ICart } from "@/types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DecrementCartItemButton from "./DecrementCartItemButton";
import DeleteCartButton from "./DeleteCartButton";
import IncrementCartItemButton from "./IncrementCartItemButton";

export default function MyCartCard({ cart }: { cart: ICart }) {
  const originalQuantity = Number(cart.quantity);

  const { handleDecrease, handleIncrease, quantity } = useUpdateCartQuantity({
    initialValue: originalQuantity,
  });

  const productPrice = Number(cart?.totalPrice) / originalQuantity;

  const totalPrice = (productPrice * quantity).toFixed(2);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "background.paper",
        p: 3,
        borderRadius: 4,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
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

        <Grid item xs={12} md={1}>
          <Typography fontWeight={600} fontSize="1rem" color="text.primary">
            Quantity
          </Typography>
          <Typography fontSize="0.9rem" color="text.secondary">
            {quantity}
          </Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography fontWeight={600} fontSize="1rem" color="text.primary">
            Total
          </Typography>
          <Typography fontSize="0.9rem" color="text.secondary">
            ${totalPrice}
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Stack direction="row" spacing={1} justifyContent="center">
            <IncrementCartItemButton onChange={handleIncrease} />
            <DecrementCartItemButton onChange={handleDecrease} />
            <DeleteCartButton id={cart._id} />
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
