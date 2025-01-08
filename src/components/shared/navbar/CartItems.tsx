"use client";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import RemoveCartItemButton from "./RemoveCartItemButton";

interface ICartData {
  id: string;
  name: string;
  thumbnail: string;
  total: number;
  quantity: number;
}

interface ICartItemsProps {
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: () => void;
  carts: ICartData[] | undefined;
  isLoading: boolean;
}

export default function CartItems({
  anchorElUser,
  handleCloseUserMenu,
  carts,
  isLoading = false,
}: ICartItemsProps) {
  return (
    <>
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
          {isLoading ? (
            <Typography variant="body2" textAlign="center">
              Loading cart...
            </Typography>
          ) : !carts ? (
            <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
              Your Cart is empty
            </Typography>
          ) : (
            carts?.map(({ name, thumbnail, total, id, quantity }) => (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                key={id}
                sx={{
                  mb: 2,
                  "&:last-child": {
                    mb: 0,
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar
                    alt={name}
                    src={thumbnail || "/static/images/avatar/2.jpg"}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography
                      component="h6"
                      variant="subtitle1"
                      fontWeight={500}
                      sx={{ mb: 0.5 }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      component="p"
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      ${total.toFixed(2)}
                    </Typography>
                    <Typography
                      component="p"
                      variant="body2"
                      color="text.secondary"
                    >
                      Quantity: {quantity}
                    </Typography>
                  </Box>
                </Stack>
                <RemoveCartItemButton
                  id={id}
                  handleCloseUserMenu={handleCloseUserMenu}
                />
              </Stack>
            ))
          )}
          <Divider sx={{ my: 2 }} />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              borderRadius: 2,
              boxShadow: "none",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              },
            }}
            component={Link}
            href="/dashboard/user/my-cart"
          >
            View Cart
          </Button>
        </Box>
      </Menu>
    </>
  );
}
