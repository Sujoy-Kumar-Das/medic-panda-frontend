"use client";
import image from "@/assets/checkout-image.png";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import { useGetSingleCartProductsQuery } from "@/redux/api/addToCart.api";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { usePlaceOrderMutation } from "@/redux/api/order.api";
import { orderShippingAddressSchema } from "@/schemas/order.schema";
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
  const { data: user } = useGetMeQuery(undefined);

  const router = useRouter();

  const { data } = useGetSingleCartProductsQuery(params.id);

  const userInfo = user?.data;
  const orderItem = data?.data;

  const defaultValues = {
    name: userInfo?.name || "",
    email: userInfo?.user?.email || "",
    street: userInfo?.address?.street || "",
    city: userInfo?.address?.city || "",
    postalCode: userInfo?.address?.postalCode || "",
    country: userInfo?.address?.country || "",
  };

  const handleOrder = async (values: FieldValues) => {
    const orderData = {
      product: orderItem?.product?._id,
      quantity: orderItem.quantity || 1,
      shippingAddress: values,
    };

    const res = await placeOrder(orderData).unwrap();

    if (!res.paymentUrl) {
      toast.error("Failed to place order.");
    }

    toast.success("Order Placed Successfully.");

    router.replace(res?.data?.paymentUrl);
  };

  return (
    <>
      {userInfo && (
        <Container maxWidth="lg" sx={{ mb: 6 }}>
          <Box py={3} textAlign="center">
            <Typography
              component="h1"
              variant="h4"
              color="primary"
              fontWeight="bold"
            >
              Complete Your Order
            </Typography>
            <Typography component="h2" variant="h6" color="text.secondary">
              Complete Your Order for Quick Delivery
            </Typography>
            <Divider
              sx={{
                margin: "20px auto",
                backgroundColor: "primary.main",
                height: "2px",
              }}
            />
          </Box>

          <PandaForm
            resolver={zodResolver(orderShippingAddressSchema)}
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
                  titleTypographyProps={{
                    variant: "h6",
                    fontWeight: "bold",
                    color: "primary.main",
                  }}
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <PandaInputField
                        type="text"
                        name="name"
                        label="Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <PandaInputField
                        type="email"
                        name="email"
                        label="Email"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="street"
                        label="Street"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="city"
                        label="City"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="postalCode"
                        label="Postal Code"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="country"
                        label="Country"
                        fullWidth
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
                  title={`Order Summary For ${orderItem?.product?.name}`}
                  titleTypographyProps={{
                    variant: "h6",
                    fontWeight: "bold",
                    color: "secondary",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 500 }}
                    color={"secondary"}
                  >
                    Quantity: {orderItem?.quantity}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 500 }}
                    color={"secondary"}
                  >
                    Price: ${orderItem?.product?.price}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                    color={"secondary"}
                  >
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
