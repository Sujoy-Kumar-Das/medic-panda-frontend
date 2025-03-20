/* eslint-disable react-hooks/exhaustive-deps */
import { onErrorMessageToast } from "@/utils/onErrorMessageToast";
import { onSuccessMessageToast } from "@/utils/onSuccessMessageToast";
import { useEffect } from "react";

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
  onClose?: () => void;
}

// onClose is a handler that handle the modal state after success on api response

export const useApiMutationResponseHandler = ({
  apiResponse,
  successMessage,
  onClose,
}: IUseApiMutationResponseHandler) => {
  const { isError, isSuccess, error } = apiResponse;

  useEffect(() => {
    if (!isError && !isSuccess) return;

    if (isError) {
      onErrorMessageToast(error);
    }

    if (isSuccess) {
      onSuccessMessageToast(successMessage);
      onClose && onClose();
    }
  }, [isError, error, isSuccess, successMessage]);
};
