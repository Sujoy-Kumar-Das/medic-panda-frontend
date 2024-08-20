"use client";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import CurrentOrdersTab from "./CurrentOrdersTab";

export default function OrderPageTab() {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Current" value="1" />
          <Tab label="Delivered" value="2" />
          <Tab label="Delivered" value="3" />
          <Tab label="Returned" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <CurrentOrdersTab />
      </TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  );
}
