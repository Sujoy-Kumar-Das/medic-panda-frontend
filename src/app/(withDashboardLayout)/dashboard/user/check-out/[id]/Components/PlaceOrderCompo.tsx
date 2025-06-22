"use client";
import image from "@/assets/checkout-image.png";
import PandaForm from "@/components/form/PandaForm";
import PandaInputField from "@/components/form/PandaInputField";
import usePlaceOrder from "@/hooks/usePlaceOrder";
import useUserDefaultValue from "@/hooks/useUserDefaultValue";
import { orderShippingAddressSchema } from "@/schemas/order.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { LoadingButton } from "@mui/lab";
import {
  Box,
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
import OrderSummeryCard from "./OrderSummeryCard";

export default function PlaceOrderCompo({ data: orderItem }: { data: any }) {
  // place order custom hook
  const { handlerFunc, isLoading } = usePlaceOrder({
    productId: orderItem?.product._id,
  });

  // get shipping address default values
  const { defaultValues } = useUserDefaultValue();

  const orderDefaultValues = {
    ...defaultValues,
    quantity: 1,
  };

  return (
    <>
      {defaultValues && (
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
            defaultValues={orderDefaultValues}
            onSubmit={handlerFunc}
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
                    objectFit: "fill",
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
                    <Grid item xs={12}>
                      <PandaInputField
                        type="tel"
                        name="contact"
                        label="Contact"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="address.street"
                        label="Street"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="address.city"
                        label="City"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="address.postalCode"
                        label="Postal Code"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PandaInputField
                        type="text"
                        name="address.country"
                        label="Country"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Stack>

            <Box sx={{ mt: 4 }}>
              {/* order summery card */}
              <OrderSummeryCard orderItem={orderItem} />

              {/* order submit button */}
              <Box textAlign="center">
                <LoadingButton
                  sx={{
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "25px",
                  }}
                  loadingIndicator={"Placing Order..."}
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                >
                  Place Order
                </LoadingButton>
              </Box>
            </Box>
          </PandaForm>
        </Container>
      )}
    </>
  );
}
