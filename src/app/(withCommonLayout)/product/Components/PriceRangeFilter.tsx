"use client";

import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";

const PriceRangeFilter = () => {
  const minPrice = 0;
  const maxPrice = 1000;

  const [priceRange, setPriceRange] = useState<number[]>([100, 800]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue);
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" fontWeight="bold" mb={2} color="text.primary">
        Price Range
      </Typography>

      <Box px={1}>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography variant="caption" color="text.secondary">
            ${minPrice}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ${maxPrice}
          </Typography>
        </Box>

        <Slider
          value={priceRange}
          onChange={handleChange}
          min={minPrice}
          max={maxPrice}
          valueLabelDisplay="off"
          sx={{
            color: "primary.main",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 16,
              height: 16,
            },
          }}
        />

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="body2" color="text.secondary">
            Min: <strong>${priceRange[0]}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Max: <strong>${priceRange[1]}</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceRangeFilter;
