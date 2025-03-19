import { QueryStatus } from "@reduxjs/toolkit/query";

export interface LoadingErrorWrapperProps {
  query: {
    status: QueryStatus;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    error?: unknown;
    isFetching?: boolean;
    refetch: () => void;
  };
  LoaderComponent?: React.ReactNode;
  ErrorComponent?: React.ReactNode;
  children: React.ReactNode;
}
