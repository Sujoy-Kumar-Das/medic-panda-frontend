"use client";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import InstallmentsTable from "./InstallmentPayment";

export default function PaymentTab() {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Installments" value="1" />
          <Tab label="Pending Payments" value="3" />
          <Tab label="Payment History" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <InstallmentsTable />
      </TabPanel>
      <TabPanel value="2">
        {" "}
        <InstallmentsTable />
      </TabPanel>
      <TabPanel value="3">
        {" "}
        <InstallmentsTable />
      </TabPanel>
    </TabContext>
  );
}
