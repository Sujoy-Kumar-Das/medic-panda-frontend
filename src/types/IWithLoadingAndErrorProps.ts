import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { TypedUseQueryHookResult } from "@reduxjs/toolkit/query/react";

export interface IWithLoadingAndErrorProps<
  T,
  QueryArg,
  BaseQuery extends BaseQueryFn
> {
  query: TypedUseQueryHookResult<T, QueryArg, BaseQuery>;
  noDataMessage?: string;
  noDataLink?: string;
  noDataText?: string;
  LoaderCompo?: React.ElementType;
  ErrorCompo?: React.ElementType;
}
