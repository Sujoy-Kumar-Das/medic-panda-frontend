"use client";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import MoreDetails from "./MoreDetails";
import ProductReviewTab from "./ProductReviewTab";

export default function ProductDetailsTab({ category, manufacturer, variant }) {
  const [value, setValue] = useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <TabList onChange={handleChange}>
          <Tab label="More Information" value="1" sx={{ p: 0 }} />
          <Tab label="Reviews" value="2" />
          <Tab label="Add Review" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1" sx={{ p: 0 }}>
        <MoreDetails
          category={category}
          manufacturer={manufacturer}
          variant={variant}
        />
      </TabPanel>
      <TabPanel value="2">
        <ProductReviewTab />
      </TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  );
}
