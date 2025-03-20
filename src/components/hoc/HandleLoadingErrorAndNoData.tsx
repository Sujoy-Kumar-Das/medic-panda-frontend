import ErrorPage from "@/components/shared/error/Error";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { isGenericErrorResponse } from "@/utils/isGenericErrorResponseTypeGuard";
import {
  BaseQueryFn,
  TypedUseQueryHookResult,
} from "@reduxjs/toolkit/query/react";
import React from "react";

interface WithLoadingAndErrorProps<T, QueryArg, BaseQuery extends BaseQueryFn> {
  query: TypedUseQueryHookResult<T, QueryArg, BaseQuery>;
  noDataMessage?: string;
  noDataLink?: string;
  noDataText?: string;
  LoaderCompo?: React.ElementType;
  ErrorCompo?: React.ElementType;
}

function HandleLoadingErrorAndNoData<
  T,
  QueryArg,
  BaseQuery extends BaseQueryFn
>(Component: React.ComponentType<{ data: T }>) {
  return function WithLoadingAndErrorWrapper({
    query,
    noDataMessage = "No data found.",
    noDataLink = "/",
    noDataText = "Go back",
    LoaderCompo,
    ErrorCompo,
  }: WithLoadingAndErrorProps<T, QueryArg, BaseQuery>) {
    const { data, isLoading, isFetching, isError, error, refetch } = query;

    // Handle loading state
    if (isLoading || isFetching) {
      return <>{LoaderCompo ? <LoaderCompo /> : <Loader />}</>;
    }

    // Handle error state
    if (isError) {
      const formattedError = isGenericErrorResponse(error) ? error : undefined;
      return (
        <>
          {ErrorCompo ? (
            <ErrorCompo error={formattedError} />
          ) : (
            <ErrorPage error={formattedError} refetch={refetch} />
          )}
        </>
      );
    }

    // Handle no data state
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return (
        <NoDataFound
          link={noDataLink}
          message={noDataMessage}
          text={noDataText}
        />
      );
    }

    return <Component data={data} />;
  };
}

export default HandleLoadingErrorAndNoData;
