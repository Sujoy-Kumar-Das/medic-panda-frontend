"use client";

import useSearch from "@/hooks/useSearch";
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

const sortOptions = [
  { id: "sort-default", title: "Default", value: "" },
  { id: "sort-price-low", title: "Price: Low to High", value: "price_low" },
  { id: "sort-price-high", title: "Price: High to Low", value: "price_high" },
  { id: "sort-rating", title: "Customer Rating", value: "rating" },
  { id: "sort-new", title: "Newest Arrivals", value: "new" },
];

export default function SortProduct() {
  const { search, getParam } = useSearch();

  const initialValue = getParam("sort");
  const [sortBy, setSortBy] = useState(initialValue);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSortBy(value);
    search({ sort: value });
  };

  return (
    <Box mt={4}>
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
          {sortOptions.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
