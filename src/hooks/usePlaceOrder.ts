"use client";
import { usePlaceOrderMutation } from "@/redux/api/order.api";
import { FieldValues } from "react-hook-form";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { useRouter } from "next/navigation";

export default function usePlaceOrder({ orderItem }) {
  // place order redux hook
  const [placeOrder, apiResponse] = usePlaceOrderMutation();
  const router = useRouter();

  const handlerFunc = async (values: FieldValues) => {
    const orderData = {
      product: orderItem?.product?._id,
      quantity: orderItem?.quantity || 1,
      shippingInfo: values,
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
