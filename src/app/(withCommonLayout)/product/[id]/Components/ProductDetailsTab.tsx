"use client";
import { ICategory } from "@/types";
import { IManufacturer } from "@/types/Imanufacturer.type";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import AddReviewTab from "./AddReviewTab";
import MoreDetails from "./MoreDetails";
import ProductReviewTab from "./ProductReviewTab";

interface IProductDetailsTab {
  productId: string;
  category: ICategory;
  manufacture: IManufacturer;
}

const reviewTabItems = {
  tabs: [
    { title: "More Information", value: "1" },
    { title: "Reviews", value: "2" },
    { title: "Add Review", value: "3" },
  ],

  panels: [
    { Component: MoreDetails, value: "1" },
    { Component: ProductReviewTab, value: "2" },
    { Component: AddReviewTab, value: "3" },
  ],
};

export default function ProductDetailsTab({
  productId,
  category,
  manufacture,
}: IProductDetailsTab) {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <TabList onChange={handleChange}>
          {reviewTabItems.tabs.map((item) => (
            <Tab key={item.value} label={item.title} value={item.value} />
          ))}
        </TabList>
      </Box>

      {reviewTabItems.panels.map(({ value: panelValue, Component }) => (
        <TabPanel key={panelValue} value={panelValue} sx={{ px: 0 }}>
          <Component
            productId={productId}
            category={category}
            manufacture={manufacture}
          />
        </TabPanel>
      ))}
    </TabContext>
  );
}
