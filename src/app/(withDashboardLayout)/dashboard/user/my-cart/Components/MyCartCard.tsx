import { ICart } from "@/types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Grid, keyframes, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DecrementCartItemButton from "./DecrementCartItemButton";
import IncrementCartItemButton from "./IncrementCartItemButton";

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
            <IncrementCartItemButton id={cart?._id} />
            <DecrementCartItemButton id={cart?._id} />
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
