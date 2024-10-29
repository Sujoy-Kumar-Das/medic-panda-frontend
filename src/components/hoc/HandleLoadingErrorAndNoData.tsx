import ErrorPage from "@/components/shared/error/Error";
import Loader from "@/components/shared/loader/Loader";
import NoDataFound from "@/components/shared/notFound/NoDataFound";
import { IGenericErrorResponse } from "@/types";
import React from "react";

interface WithLoadingAndErrorProps<T> {
  data: T | undefined;
  isLoading: boolean;
  error: IGenericErrorResponse | undefined;
  noDataMessage?: string;
  noDataLink?: string;
  noDataText?: string;
  LoaderCompo?: React.ElementType;
  ErrorCompo?: React.ElementType;
}

function HandleLoadingErrorAndNoData<T extends any[] | object>(
  Component: React.ComponentType<{ data: T }>
) {
  return function WithLoadingAndErrorWrapper(
    props: WithLoadingAndErrorProps<T>
  ) {
    const {
      data,
      isLoading,
      error,
      noDataMessage = "No data found.",
      noDataLink = "/",
      noDataText = "Go back",
      LoaderCompo,
      ErrorCompo,
    } = props;

    if (isLoading) {
      return <>{LoaderCompo ? <LoaderCompo /> : <Loader />}</>;
    }

    if (error) {
      return (
        <>
          {ErrorCompo ? (
            <ErrorCompo error={error} />
          ) : (
            <ErrorPage error={error} />
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

    return <Component data={data} />;
  };
}

export default HandleLoadingErrorAndNoData;
