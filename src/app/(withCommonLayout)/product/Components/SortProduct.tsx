"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function SortProduct() {
  const [sortBy, setSortBy] = useState("featured");

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" fontWeight={600} mb={2} color="text.primary">
        Sort By
      </Typography>
      <FormControl fullWidth size="small">
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          value={sortBy}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value="featured">Featured</MenuItem>
          <MenuItem value="price-low">Price: Low to High</MenuItem>
          <MenuItem value="price-high">Price: High to Low</MenuItem>
          <MenuItem value="rating">Customer Rating</MenuItem>
          <MenuItem value="newest">Newest Arrivals</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
