import ErrorPage from "@/components/shared/error/Error";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { IWithLoadingAndErrorProps } from "@/types";
import { isGenericErrorResponse } from "@/utils/isGenericErrorResponseTypeGuard";
import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { usePathname } from "next/navigation";
import React from "react";

function HandleLoadingErrorAndNoData<
  T,
  QueryArg,
  BaseQuery extends BaseQueryFn
>(
  Component: React.ComponentType<{
    data: T;
    isLoading: boolean;
    isError: boolean;
  }>
) {
  return function WithLoadingAndErrorWrapper({
    query,
    noDataMessage = "No data found.",
    noDataLink,
    noDataText = "Go back",
    LoaderCompo,
    ErrorCompo,
    NoDataCompo,
  }: IWithLoadingAndErrorProps<T, QueryArg, BaseQuery>) {
    const { data, isLoading, isError, error, isFetching, refetch } = query;

    const path = usePathname();

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
        <>
          {NoDataCompo ? (
            <NoDataCompo />
          ) : (
            <NoDataFound
              link={noDataLink || path}
              message={noDataMessage}
              text={noDataText}
            />
          )}
        </>
      );
    }

    return (
      <Component
        data={data}
        isLoading={isLoading || isFetching}
        isError={isError}
      />
    );
  };
}

export default HandleLoadingErrorAndNoData;
