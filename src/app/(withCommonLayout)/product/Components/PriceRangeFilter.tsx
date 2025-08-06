"use client";

import useSearch from "@/hooks/useSearch";
import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

const PriceRangeFilter = () => {
  const { search, getParam } = useSearch();

  const initialMin = Number(getParam("min_price")) || DEFAULT_MIN_PRICE;
  const initialMax = Number(getParam("max_price")) || DEFAULT_MAX_PRICE;

  const [priceRange, setPriceRange] = useState<number[]>([
    initialMin,
    initialMax,
  ]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const isRangeArray = Array.isArray(newValue);

    if (!isRangeArray) {
      return;
    }

    const isPrev =
      priceRange[0] === newValue[0] && priceRange[1] === newValue[1];

    if (isPrev) {
      return;
    }

    setPriceRange(newValue);

    search({
      min_price: String(newValue[0]),
      max_price: String(newValue[1]),
    });
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" fontWeight="bold" mb={2} color="text.primary">
        Price Range
      </Typography>

      <Box px={1}>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography variant="caption" color="text.secondary">
            ${DEFAULT_MIN_PRICE}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ${DEFAULT_MAX_PRICE}
          </Typography>
        </Box>

        <Slider
          value={priceRange}
          onChange={handleChange}
          min={DEFAULT_MIN_PRICE}
          max={DEFAULT_MAX_PRICE}
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
