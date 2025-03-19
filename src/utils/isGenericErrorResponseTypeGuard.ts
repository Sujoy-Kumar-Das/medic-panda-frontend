import { IGenericErrorResponse } from "@/types";

// Utility function for ensure the type of error ;
export const isGenericErrorResponse = (
  error: unknown
): error is IGenericErrorResponse => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as IGenericErrorResponse).message === "string"
  );
};
