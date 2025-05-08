import PandaInputField from "@/components/form/PandaInputField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, Stack, Typography } from "@mui/material";
import { ChangeEvent } from "react";

interface OrderQuantityProps {
  onIncrease: () => void;
  onDecrease: () => void;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  quantity: number;
}

export default function OrderQuantity({
  onIncrease,
  onDecrease,
  onChange,
  quantity,
}: OrderQuantityProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1} mb={1}>
      <Typography variant="body1" sx={{ fontWeight: 500 }} color={"secondary"}>
        Quantity:
      </Typography>
      <IconButton size="small" onClick={onDecrease}>
        <RemoveIcon fontSize="small" />
      </IconButton>
      <PandaInputField
        onChange={onChange}
        name="quantity"
        type="number"
        value={String(quantity)}
        sx={{ width: 60 }}
      />
      <IconButton size="small" onClick={onIncrease}>
        <AddIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
}
