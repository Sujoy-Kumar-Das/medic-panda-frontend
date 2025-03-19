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

  // handle the loading and refetch state while fetching
  const loading = query.isLoading || query.isFetching;

  // Handle loading state
  if (loading) return LoaderComponent;

  // Handle error state
  if (query.isError) {
    return (
      ErrorComponent || <ErrorPage error={error} refetch={query.refetch} />
    );
  }

  // Return children when successful
  return <>{children}</>;
}
