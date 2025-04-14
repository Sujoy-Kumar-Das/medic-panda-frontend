import { IWithLoadingAndErrorProps } from "@/types";
import { isGenericErrorResponse } from "@/utils/isGenericErrorResponseTypeGuard";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { ReactNode } from "react";
import ErrorPage from "../error/Error";
import Loader from "../loader/Loader";
import NoDataFound from "../notFound/NoDataFound";

interface LoadingErrorWrapperProps<T, QueryArg, BaseQuery extends BaseQueryFn>
  extends IWithLoadingAndErrorProps<T, QueryArg, BaseQuery> {
  children: ReactNode;
}

export default function LoadingErrorWrapper<
  T,
  QueryArg,
  BaseQuery extends BaseQueryFn
>({
  query,
  ErrorCompo,
  LoaderCompo,
  noDataLink,
  noDataMessage,
  noDataText,
  children,
}: LoadingErrorWrapperProps<T, QueryArg, BaseQuery>) {
  const { data, isLoading, isError, error, refetch } = query;
  // handle the loading and refetch state while fetching

  // Handle loading state
  if (isLoading) {
    return <>{LoaderCompo ? <LoaderCompo /> : <Loader />}</>;
  }

  // Handle error state
  if (isError) {
    const formattedError = isGenericErrorResponse(error) ? error : undefined;
    return (
      <>
        {ErrorCompo ? (
          <ErrorCompo error={formattedError} refetch={refetch} />
        ) : (
          <ErrorPage error={formattedError} refetch={refetch} />
        )}
      </>
    );
  }

  if (!data || (Array.isArray(data) && data.length === 0)) {
    return (
      <NoDataFound
        link={noDataLink}
        message={noDataMessage}
        text={noDataText}
      />
    );
  }

  // Return children when successful
  return <>{children}</>;
}
