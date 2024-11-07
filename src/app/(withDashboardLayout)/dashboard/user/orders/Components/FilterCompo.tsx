import { OrderStatus } from "@/types";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button, Menu, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FilterItem from "./FilterItem";

const filterItems = [
  { title: "All", value: "" },
  { title: OrderStatus.PENDING, value: OrderStatus.PENDING },
  { title: OrderStatus.PAID, value: OrderStatus.PAID },
  { title: OrderStatus.PROCESSING, value: OrderStatus.PROCESSING },
  { title: OrderStatus.SHIPPED, value: OrderStatus.SHIPPED },
  { title: OrderStatus.DELIVERED, value: OrderStatus.DELIVERED },
  { title: OrderStatus.CANCELED, value: OrderStatus.CANCELED },
  { title: OrderStatus.RETURNED, value: OrderStatus.RETURNED },
];

interface FilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterCompo: React.FC<FilterProps> = ({
  selectedFilter,
  onFilterChange,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenFilterMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilterMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography
        variant="h4"
        color="text.secondary"
        textTransform={"capitalize"}
      >
        {selectedFilter ? `${selectedFilter} Orders` : "All Orders"}
      </Typography>
      <Button onClick={handleOpenFilterMenu} endIcon={<FilterListIcon />}>
        Filter
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseFilterMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {filterItems.map((item) => (
          <FilterItem
            key={item.value}
            value={item.value}
            title={item.title}
            onFilterChange={onFilterChange}
          />
        ))}
      </Menu>
    </Stack>
  );
};

export default FilterCompo;
