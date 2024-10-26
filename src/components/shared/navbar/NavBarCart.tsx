"use client";
import {
  useGetAllCartProductsQuery,
  useRemoveCartProductMutation,
} from "@/redux/api/addToCart.api";
import { removeSingleProduct } from "@/redux/features/cart.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ICart, IGenericErrorResponse } from "@/types";
import { IUserInfo } from "@/types/user.type";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import NavUserMenu from "./NavUserMenu";

export default function NavBarCart({ user }: { user: IUserInfo }) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { carts } = useAppSelector((state) => state.cart);
  const { data, isLoading } = useGetAllCartProductsQuery(undefined);
  const [
    removeCartItemFromDB,
    { isLoading: removeCartLoader, isSuccess, isError, error },
  ] = useRemoveCartProductMutation();

  const dispatch = useAppDispatch();
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null); // Local loading state for each product

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRemoveFromCart = async (id: string) => {
    const userId = user?.userId;

    // Set loading state for the specific product
    setLoadingProductId(id);

    if (!user && !userId) {
      dispatch(removeSingleProduct({ id }));
      setLoadingProductId(null); // Reset loader after dispatch
      return;
    }

    try {
      // Remove from db
      await removeCartItemFromDB({
        product: id,
      }).unwrap();

      // On success, show toast
      toast.success("Cart removed successfully");
      handleCloseUserMenu();
    } catch (error) {
      // Handle error
      toast.error((error as IGenericErrorResponse).message);
    } finally {
      // Reset loading state
      setLoadingProductId(null);
    }
  };

  // Manage remove product from db state;
  useEffect(() => {
    if (isSuccess) {
      handleCloseUserMenu();
    }
  }, [isSuccess]);

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
              {data?.length >= 1 && (
                <Typography
                  color="success"
                  sx={{ position: "absolute", top: -3, right: 1 }}
                >
                  {data?.length}
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
          {isLoading ? (
            <Typography variant="body2" textAlign="center">
              Loading cart...
            </Typography>
          ) : (
            <>
              {user && data?.length ? (
                data?.map((cart: ICart) => (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    key={cart._id}
                    sx={{
                      mb: 2,
                      "&:last-child": {
                        mb: 0,
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar
                        alt={cart?.product?.name}
                        src={
                          cart?.product?.thumbnail ||
                          "/static/images/avatar/2.jpg"
                        }
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box>
                        <Typography
                          component="h6"
                          variant="subtitle1"
                          fontWeight={500}
                          sx={{ mb: 0.5 }}
                        >
                          {cart?.product?.name}
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
                      onClick={() => handleRemoveFromCart(cart.product._id)}
                      disabled={loadingProductId === cart.product._id} // Disable only for the product being deleted
                      color="error"
                      sx={{
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 0, 0, 0.1)",
                        },
                      }}
                    >
                      {loadingProductId === cart.product._id ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        <DeleteIcon />
                      )}
                    </IconButton>
                  </Stack>
                ))
              ) : !user && carts.length ? (
                carts.map((cart: any) => (
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
                        alt={cart?.product?.name}
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
                          {cart?.name}
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
                      disabled={loadingProductId === cart.id} // Disable only for the product being deleted
                      color="error"
                      sx={{
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 0, 0, 0.1)",
                        },
                      }}
                    >
                      {loadingProductId === cart.id ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        <DeleteIcon />
                      )}
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
            </>
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
