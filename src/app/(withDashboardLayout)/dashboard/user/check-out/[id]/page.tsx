"use client";
import image from "@/assets/checkout-image.png";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { usePlaceOrderMutation } from "@/redux/api/order.api";
import { removeSingleProduct } from "@/redux/features/cart.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { orderSchema } from "@/schemas/order.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function PlaceOrderPage({ params }: { params: { id: string } }) {
  const [placeOrder, { isLoading }] = usePlaceOrderMutation();
  const { data } = useGetMeQuery(undefined);
  const { carts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const orderItem = carts.find((cart) => cart.id === params.id);

  const defaultValues = {
    name: data?.name || "",
    email: data?.user?.email || "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
  };

  const handleOrder = async (values: FieldValues) => {
    const orderData = {
      product: params.id,
      quantity: orderItem.quantity,
    };

    const res = await placeOrder(orderData).unwrap();

    if (!res.paymentUrl) {
      toast.error("Failed to place order.");
    }

    toast.success("Order Placed Successfully.");
    dispatch(
      removeSingleProduct({ id: params.id, quantity: orderItem.quantity })
    );

    router.replace(res.paymentUrl);
  };

  return (
    <>
      {data && (
        <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Complete Your Order
          </Typography>

          <PandaForm
            resolver={zodResolver(orderSchema)}
            defaultValues={defaultValues}
            onSubmit={handleOrder}
          >
            <Stack
              direction="row"
              spacing={4}
              justifyContent="center"
              alignItems="stretch"
              sx={{ mb: 4 }}
            >
              <Box sx={{ flex: 1, maxWidth: 500, minWidth: 500 }}>
                <Image
                  src={image}
                  alt="Checkout Image"
                  height={500}
                  width={500}
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>

              <Card
                sx={{ flex: 1, maxWidth: 500, minWidth: 500, boxShadow: 0 }}
              >
                <CardHeader
                  avatar={<LocalShippingIcon color="primary" />}
                  title="Shipping Address"
                  titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <PandaInputField
                        type="text"
                        name="name"
                        label="Name"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <PandaInputField
                        type="email"
                        name="email"
                        label="Email"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="street"
                        label="Street"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="city"
                        label="City"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="postalCode"
                        label="Postal Code"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="country"
                        label="Country"
                        fullWidth
                        required
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Stack>

            <Box sx={{ mt: 4 }}>
              <Card
                sx={{
                  p: 3,
                  mb: 4,
                  boxShadow: 0,
                  backgroundColor: "background.default",
                }}
              >
                <CardHeader
                  avatar={<ShoppingCartIcon color="secondary" />}
                  title={`Order Summary For ${orderItem?.name}`}
                  titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
                />
                <CardContent>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Quantity: {orderItem?.quantity}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Price: ${orderItem?.price}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Total: ${orderItem?.totalPrice}
                  </Typography>
                </CardContent>
              </Card>

              <Box textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "25px",
                  }}
                >
                  Place Order
                </Button>
              </Box>
            </Box>
          </PandaForm>
        </Container>
      )}
    </>
  );
}