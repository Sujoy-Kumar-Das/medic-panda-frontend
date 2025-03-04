import PandaForm from "@/components/form/PandaForm";
import PandaSelect from "@/components/form/PandaSelect";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import useChangeOrderStatus from "@/hooks/useChangeOrderStatus";
import { changeOrderStatusSchema } from "@/schemas/order.schema";
import { OrderStatus } from "@/types";
import randomUID from "@/utils/randomId";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/material";
import { FieldValues } from "react-hook-form";

interface ChangeOrderStatusFormProps {
  orderId: string;
  onChange: () => void;
}

export default function ChangeOrderStatusForm({
  orderId,
  onChange,
}: ChangeOrderStatusFormProps) {
  const { handleChangeOrderStatus, isLoading } = useChangeOrderStatus();

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
  const handleSubmit = async (value: FieldValues) => {
    await handleChangeOrderStatus(orderId, value, onChange);
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

        <LoaderButton
          isLoading={isLoading}
          loadingText="Changing Status"
          type="submit"
        >
          Change
        </LoaderButton>
      </Box>
    </PandaForm>
  );
}
