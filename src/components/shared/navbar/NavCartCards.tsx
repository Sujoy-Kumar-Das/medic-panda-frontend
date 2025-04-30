import useCartMessage from "@/hooks/useCartMessage";
import useGetCartItems from "@/hooks/useGetCartItems";
import { Box, Button, Divider, Menu, Typography } from "@mui/material";
import Link from "next/link";
import NavCartCard from "./NavCartCard";

interface ICartItemsProps {
  anchorElUser: null | HTMLElement;
  onClose: () => void;
}

export default function NavCartCards({
  anchorElUser,
  onClose,
}: ICartItemsProps) {
  // load the carts data from custom hook;
  const { cartData: carts, isLoading } = useGetCartItems();

  const { message } = useCartMessage({
    isLoading,
    length: Number(carts?.length),
  });

  return (
    <Menu
      sx={{
        mt: "45px",
        "& .MuiMenu-paper": {
          width: 350,
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
      }}
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={onClose}
    >
      <Box sx={{ padding: 2 }}>
        {message ? (
          <Typography variant="body2" textAlign="center">
            {message}
          </Typography>
        ) : (
          <>
            {carts?.map((cart) => (
              <NavCartCard key={cart.id} cart={cart} onClose={onClose} />
            ))}

            <Divider sx={{ my: 2 }} />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                borderRadius: 2,
                boxShadow: "none",
              }}
              component={Link}
              href="/dashboard/user/my-cart"
            >
              View Cart
            </Button>
          </>
        )}
      </Box>
    </Menu>
  );
}
