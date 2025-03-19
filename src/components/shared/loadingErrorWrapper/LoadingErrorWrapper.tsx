import { isGenericErrorResponse } from "@/utils/isGenericErrorResponseTypeGuard";
import ErrorPage from "../error/Error";
import Loader from "../loader/Loader";
import { LoadingErrorWrapperProps } from "./loadingErrorWrapper.type";

export default function LoadingErrorWrapper({
  query,
  LoaderComponent = <Loader />,
  ErrorComponent,
  children,
}: LoadingErrorWrapperProps) {
  // Safely cast the error to IGenericErrorResponse
  const error = isGenericErrorResponse(query.error) ? query.error : undefined;

  // Handle loading state
  if (query.isLoading) return LoaderComponent;

  // Handle error state
  if (query.isError) {
    return ErrorComponent || <ErrorPage error={error} />;
  }

  // Return children when successful
  return <>{children}</>;
}
