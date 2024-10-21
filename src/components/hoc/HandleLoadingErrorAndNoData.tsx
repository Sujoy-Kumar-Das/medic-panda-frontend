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
    } = props;

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorPage error={error} />;
    }

    if (!data || data.length === 0) {
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
