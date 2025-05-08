"use client";

import AddToCartButton from "@/components/ui/buttons/AddToCartButton";
import useAddToCart from "@/hooks/useAddToCart";
import useUpdateCartQuantity from "@/hooks/useUpdateFieldQuantityValue";
import { IProduct } from "@/types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton, Stack, TextField } from "@mui/material";

export default function ProductQuantity({ product }: { product: IProduct }) {
  const { handlerFunc, isLoading } = useAddToCart();

  const { quantity, handleDecrease, handleIncrease, handleInputChange } =
    useUpdateCartQuantity({
      initialValue: 1,
    });

  return (
    <Stack direction="row" alignItems="center" spacing={2} mt={1}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100px",
        }}
      >
        <IconButton
          size="small"
          color="primary"
          sx={{ position: "absolute", left: 0, zIndex: 1 }}
          onClick={handleDecrease}
        >
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>
        <TextField
          name="quantity"
          variant="outlined"
          size="small"
          value={quantity}
          onChange={handleInputChange}
          inputProps={{
            style: { textAlign: "center", width: "100%" },
            inputMode: "numeric",
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              padding: "0 30px",
            },
          }}
        />
        <IconButton
          size="small"
          color="primary"
          sx={{ position: "absolute", right: 0, zIndex: 1 }}
          onClick={handleIncrease}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
      {/* <LoadingButton
        size="small"
        color="primary"
        variant="contained"
        loading={isLoading}
        disabled={isLoading}
        loadingIndicator="Adding to cart..."
        onClick={() =>
          handlerFunc({
            ...product,
            quantity,
          })
        }
      >
        Add to cart
      </LoadingButton> */}

      <AddToCartButton product={product} quantity={quantity} iconBtn={false}>
        Add To Cart
      </AddToCartButton>
    </Stack>
  );
}
