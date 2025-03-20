import { IGenericErrorResponse } from "@/types";
import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({ withCredentials: true });

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  // @ts-ignore
  function (response: AxiosResponse) {
    return { data: response?.data?.data };
  },
  function (error) {
    const errorResponseData = error?.response?.data || {};

    const responseObject: IGenericErrorResponse = {
      success: false,
      statusCode:
        errorResponseData?.statusCode || error?.response?.status || 500,
      message: errorResponseData?.message || "Something went wrong!!!",
      errorMessages: errorResponseData?.errorMessages || [
        {
          path: "unknown",
          message: errorResponseData?.message || "Unknown error occurred",
        },
      ],
    };

    return Promise.reject(responseObject);
  }
);

export default axiosInstance;
