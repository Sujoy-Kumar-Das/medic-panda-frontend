"use client";
import useSearch from "@/hooks/useSearch";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";

export default function StockAvailabilityFilter() {
  const { search, getParam } = useSearch();

  const initialValue = Boolean(getParam("stockStatus"));

  const [inStock, setInStock] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;

    if (value) {
      search({ stockStatus: "true" });
    } else {
      search({ stockStatus: undefined });
    }

    setInStock(event.target.checked);
  };

  return (
    <Box mt={4}>
      <Typography variant="h6" fontWeight={600} color="text.primary" mb={2}>
        Availability
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={inStock}
            onChange={handleChange}
            color="primary"
            sx={{ "&.Mui-checked": { color: "teal" } }}
          />
        }
        label="In stock only"
        sx={{ color: "text.secondary" }}
      />
    </Box>
  );
}
