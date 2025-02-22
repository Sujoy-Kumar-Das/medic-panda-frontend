/* eslint-disable react-hooks/exhaustive-deps */
import { onErrorMessageToast } from "@/utils/onErrorMessageToast";
import { onSuccessMessageToast } from "@/utils/onSuccessMessageToast";
import { useEffect } from "react";

// You can extend RTK Query's mutation result type to capture all properties.
interface IApiResponse {
  data?: any;
  error?: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  status: string;
}

interface IUseApiMutationResponseHandler {
  apiResponse: IApiResponse;
  successMessage: string;
}

export const useApiMutationResponseHandler = ({
  apiResponse,
  successMessage,
}: IUseApiMutationResponseHandler) => {
  const { isError, isSuccess, error } = apiResponse;

  useEffect(() => {
    if (isError) {
      onErrorMessageToast(error);
    }

    if (isSuccess) {
      onSuccessMessageToast(successMessage);
    }
  }, [isError, error, isSuccess, successMessage]);
};
