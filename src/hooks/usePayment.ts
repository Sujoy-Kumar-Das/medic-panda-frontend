"use client";

import { useRouter } from "next/navigation";
import { useApiMutationResponseHandler } from "./useApiMutationResponseHandler";
import { usePaymentNowMutation } from "@/redux/api";

export default function usePayment() {
  const [paymentNow, apiResponse] = usePaymentNowMutation();

  const router = useRouter();

  // Handle Payment Action
  const handlerFunc = async (id: string) => {
    await paymentNow(id);
  };

  const onClose = () => router.replace(apiResponse?.data?.paymentUrl);

  // Manage payment redirection or error

  useApiMutationResponseHandler({
    successMessage: "Successfully redirect to payment page.",
    apiResponse,
    onClose,
  });

  return { handlerFunc, ...apiResponse };
}
