import { IModifiedCartData } from "@/types";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import RemoveCartItemButton from "./RemoveCartItemButton";

interface NavCartCardProps {
  cart: IModifiedCartData;
  onClose: () => void;
}

export default function NavCartCard({ cart, onClose }: NavCartCardProps) {
  const { name, thumbnail, total, id, quantity } = cart;
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      key={id}
      sx={{ mb: 2, "&:last-child": { mb: 0 } }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          alt={name}
          src={thumbnail || "/static/images/avatar/2.jpg"}
          sx={{ width: 56, height: 56 }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight={500} sx={{ mb: 0.5 }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
            ${total.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: {quantity}
          </Typography>
        </Box>
      </Stack>
      <RemoveCartItemButton id={id} onClose={onClose} />
    </Stack>
  );
}
