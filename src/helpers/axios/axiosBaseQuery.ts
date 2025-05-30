import { IMeta } from "@/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

import type { AxiosError, AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
      meta?: IMeta;
      contentType?: string;
      signal?: AbortSignal;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers, contentType, signal }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...headers,
          "Content-Type": contentType || "application/json",
        },
        signal,
      });
      return result;
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: err,
      };
    }
  };
