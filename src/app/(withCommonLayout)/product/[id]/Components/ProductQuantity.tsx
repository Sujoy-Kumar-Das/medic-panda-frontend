"use client";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

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
          inputProps={{ style: { textAlign: "center", width: "100%" } }}
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
      <Button size="small" color="primary" variant="contained">
        Add to cart
      </Button>
    </Stack>
  );
}
