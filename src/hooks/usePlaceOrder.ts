"use client";
import { usePlaceOrderMutation } from "@/redux/api";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";

export default function usePlaceOrder({ productId }: { productId: string }) {
  // place order redux hook
  const [placeOrder, apiResponse] = usePlaceOrderMutation();
  const router = useRouter();

  const handlerFunc = async (values: FieldValues) => {
    const address = values.address;
    const orderData = {
      product: productId,
      quantity: Number(values.quantity) || 1,
      shippingInfo: {
        name: values.name,
        email: values.email,
        contact: values.contact,
        address: {
          city: address.city,
          country: address.country,
          postalCode: address.postalCode,
          street: address.street,
        },
      },
    };

    await placeOrder(orderData);
  };

  const onClose = () => router.replace(apiResponse?.data?.paymentUrl);

  useApiMutationResponseHandler({
    successMessage: "Order Placed successfully.",
    onClose,
    apiResponse,
  });

  return { handlerFunc, ...apiResponse };
}
