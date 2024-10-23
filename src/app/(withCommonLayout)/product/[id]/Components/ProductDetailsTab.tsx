"use client";
import { ICategory } from "@/types";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { IVariant } from "@/types/IVariant";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import AddReviewTab from "./AddReviewTab";
import MoreDetails from "./MoreDetails";
import ProductReviewTab from "./ProductReviewTab";

interface IProductDetailsTab {
  category: ICategory;
  manufacture: IManufacturer;
  variant: IVariant;
}

export default function ProductDetailsTab({
  category,
  manufacture,
  variant,
}: IProductDetailsTab) {
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
      <TabPanel value="1" sx={{ px: 0 }}>
        <MoreDetails
          category={category}
          manufacture={manufacture}
          variant={variant}
        />
      </TabPanel>
      <TabPanel value="2" sx={{ px: 0 }}>
        <ProductReviewTab />
      </TabPanel>
      <TabPanel value="3" sx={{ px: 0 }}>
        <AddReviewTab />
      </TabPanel>
    </TabContext>
  );
}
