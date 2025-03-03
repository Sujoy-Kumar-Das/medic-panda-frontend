import PandaDatePicker from "@/components/form/PandaDatePicker";
import PandaInputField from "@/components/form/PandaInputField";
import PandaTimePicker from "@/components/form/PandaTimePikcer";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { useState } from "react";

export default function DiscountForm({
  isDiscountAvailable,
}: {
  isDiscountAvailable: boolean;
}) {
  const [isDiscountEnabled, setIsDiscountEnabled] =
    useState(isDiscountAvailable);

  return (
    <>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isDiscountEnabled}
              onChange={() => setIsDiscountEnabled((prev) => !prev)}
            />
          }
          label="Apply Discount"
        />
      </Grid>
      {isDiscountEnabled && (
        <>
          <Grid item xs={12} sm={6}>
            <PandaInputField
              name="product.discount.percentage"
              label="Discount (%)"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PandaDatePicker
              name=".product.discount.startDate"
              label="Start Date"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PandaDatePicker name="product.discount.endDate" label="End Date" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PandaTimePicker
              name="product.discount.startTime"
              label="Start Time"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PandaTimePicker name="product.discount.endTime" label="End Time" />
          </Grid>
        </>
      )}
    </>
  );
}
