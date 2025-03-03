import PandaForm from "@/components/form/PandaForm";
import PandaSelect from "@/components/form/PandaSelect";
import { changeOrderStatusSchema } from "@/schemas/order.schema";
import { OrderStatus } from "@/types";
import randomUID from "@/utils/randomId";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";
import { FieldValue } from "react-hook-form";

export default function ChangeOrderStatusForm() {
  // Define the Order Status Items
  const OrderStatusItems = [
    {
      id: randomUID(),
      value: OrderStatus.PROCESSING,
      title: OrderStatus.PROCESSING,
    },
    {
      id: randomUID(),
      value: OrderStatus.SHIPPED,
      title: OrderStatus.SHIPPED,
    },
    {
      id: randomUID(),
      value: OrderStatus.DELIVERED,
      title: OrderStatus.DELIVERED,
    },
    {
      id: randomUID(),
      value: OrderStatus.CANCELED,
      title: OrderStatus.CANCELED,
    },
  ];

  // Handle form submission
  const handleSubmit = (value: FieldValue<{ status: OrderStatus }>) => {
    console.log(`Selected Status: ${value.status}`);
  };

  return (
    <PandaForm
      onSubmit={handleSubmit}
      resolver={zodResolver(changeOrderStatusSchema)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: 3,
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Panda Select for Status */}
        <PandaSelect
          items={OrderStatusItems}
          name="status"
          label="Change Status"
          sx={{ width: "100%" }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            padding: "12px 24px",
            borderRadius: 2,
            boxShadow: 2,
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Change
        </Button>
      </Box>
    </PandaForm>
  );
}
