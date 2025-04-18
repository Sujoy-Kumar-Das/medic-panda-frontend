import PandaForm from "@/components/form/PandaForm";
import PandaSelect from "@/components/form/PandaSelect";
import useChangeOrderStatus from "@/hooks/useChangeOrderStatus";
import { changeOrderStatusSchema } from "@/schemas/order.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { OrderStatusItems } from "./OrderStatusItems";

interface ChangeOrderStatusFormProps {
  orderId: string;
  onClose: () => void;
}

export default function ChangeOrderStatusForm({
  orderId,
  onClose,
}: ChangeOrderStatusFormProps) {
  const { handlerFunc, isLoading } = useChangeOrderStatus(onClose);

  // Handle form submission
  const handleSubmit = async (value: FieldValues) => {
    await handlerFunc(orderId, value);
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

        <LoadingButton
          loading={isLoading}
          loadingIndicator="Changing Status"
          type="submit"
          disabled={isLoading}
        >
          Change
        </LoadingButton>
      </Box>
    </PandaForm>
  );
}
