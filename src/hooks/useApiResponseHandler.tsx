/* eslint-disable react-hooks/exhaustive-deps */
import { IGenericErrorResponse } from "@/types";
import { onErrorMessageToast } from "@/utils/onErrorMessageToast";
import { onSuccessMessageToast } from "@/utils/onSuccessMessageToast";
import { useEffect } from "react";

interface IUseApiResponseHandler {
  isError: boolean;
  isSuccess: boolean;
  error: any;
  successMessage: string;
}

export const useApiResponseHandler = ({
  isError,
  isSuccess,
  error,
  successMessage,
}: IUseApiResponseHandler) => {
  useEffect(() => {
    if (isError) {
      onErrorMessageToast(error);
    }

    if (isSuccess) {
      onSuccessMessageToast(successMessage);
    }
  }, [isError, error, isSuccess, successMessage]);
};
