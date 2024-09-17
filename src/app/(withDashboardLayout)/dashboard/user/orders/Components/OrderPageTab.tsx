"use client";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import CurrentOrdersTab from "./CurrentOrdersTab";
import DeliveredOrdersTab from "./DeliveredOrdersTab";
import PendingOrdersTab from "./PendingOrdersTab";
import ReturnedOrdersTab from "./ReturnedOrdersTab";
import ShiftedOrdersTab from "./ShiftedOrdersTab";
import UnpaidOrdersTab from "./UnpaidOrderTab";

export default function OrderPageTab() {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <TabList onChange={handleChange} aria-label="Order Status Tabs">
          <Tab label="Current Orders" value="1" />
          <Tab label="Unpaid Orders" value="2" />
          <Tab label="Pending Orders" value="6" />
          <Tab label="Shifted Orders" value="3" />
          <Tab label="Delivered Orders" value="4" />
          <Tab label="Returned Orders" value="5" />
        </TabList>
      </Box>
      <TabPanel value="1" sx={{ p: 0 }}>
        <CurrentOrdersTab />
      </TabPanel>
      <TabPanel value="2" sx={{ p: 0 }}>
        <UnpaidOrdersTab />
      </TabPanel>
      <TabPanel value="3" sx={{ p: 0 }}>
        <ShiftedOrdersTab />
      </TabPanel>
      <TabPanel value="4" sx={{ p: 0 }}>
        <DeliveredOrdersTab />
      </TabPanel>
      <TabPanel value="5" sx={{ p: 0 }}>
        <ReturnedOrdersTab />
      </TabPanel>
      <TabPanel value="6" sx={{ p: 0 }}>
        <PendingOrdersTab />
      </TabPanel>
    </TabContext>
  );
}
