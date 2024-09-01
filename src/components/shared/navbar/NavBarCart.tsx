import { removeSingleProduct } from "@/redux/features/cart.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import NavUserMenu from "./NavUserMenu";

export default function NavBarCart({ user }: { user: boolean }) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const carts = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeSingleProduct({ id }));
  };

  return (
    <>
      {user ? (
        <>
          <Box position={"relative"}>
            <IconButton
              color="primary"
              onClick={handleOpenUserMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 1,
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <ShoppingCartIcon />
              {carts.length >= 1 && (
                <Typography
                  color="success"
                  sx={{ position: "absolute", top: -3, right: 1 }}
                >
                  {carts.length}
                </Typography>
              )}
            </IconButton>
          </Box>

          <Box display={{ xs: "none", md: "flex" }}>
            <NavUserMenu />
          </Box>
        </>
      ) : (
        <Button
          variant="contained"
          endIcon={<ShoppingCartIcon />}
          sx={{
            boxShadow: "none",
            display: { xs: "none", md: "flex" },
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
            borderRadius: 2,
            px: 3,
            py: 1,
          }}
          onClick={handleOpenUserMenu}
        >
          My Cart
        </Button>
      )}

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
        onClose={handleCloseUserMenu}
      >
        <Box sx={{ padding: 2 }}>
          {carts.length ? (
            carts.map((cart) => (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                key={cart.id}
                sx={{
                  mb: 2,
                  "&:last-child": {
                    mb: 0,
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar
                    alt={cart.name}
                    src={cart.thumbnail || "/static/images/avatar/2.jpg"}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography
                      component="h6"
                      variant="subtitle1"
                      fontWeight={500}
                      sx={{ mb: 0.5 }}
                    >
                      {cart.name}
                    </Typography>
                    <Typography
                      component="p"
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      ${cart.totalPrice?.toFixed(2)}
                    </Typography>
                    <Typography
                      component="p"
                      variant="body2"
                      color="text.secondary"
                    >
                      Quantity: {cart.quantity}
                    </Typography>
                  </Box>
                </Stack>
                <IconButton
                  onClick={() => handleRemoveFromCart(cart.id)}
                  color="error"
                  sx={{
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 0, 0, 0.1)",
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            ))
          ) : (
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              sx={{ p: 2 }}
            >
              Your cart is empty.
            </Typography>
          )}
          <Divider sx={{ my: 2 }} />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              borderRadius: 2,
              py: 1.5,
              fontWeight: "bold",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Checkout
          </Button>
        </Box>
      </Menu>
    </>
  );
}
