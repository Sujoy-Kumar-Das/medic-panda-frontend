import PandaForm from "@/components/form/PandaForm";
import PandaSelect from "@/components/form/PandaSelect";
import LoaderButton from "@/components/ui/buttons/LoaderButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/material";
import { AnyZodObject } from "zod";
import { OrderStatusItems } from "./OrderStatusItems";
import { FieldValues } from "react-hook-form";

interface ChangeOrderStatusFormProps {
  isLoading: boolean;
  onSubmit: (data: FieldValues) => Promise<void>;
  validationSchema: AnyZodObject;
}

export default function ChangeOrderStatusForm({
  onSubmit,
  validationSchema,
  isLoading,
}: ChangeOrderStatusFormProps) {
  return (
    <PandaForm onSubmit={onSubmit} resolver={zodResolver(validationSchema)}>
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

        <LoaderButton isLoading={isLoading} type="submit">
          Change
        </LoaderButton>
      </Box>
    </PandaForm>
  );
}
