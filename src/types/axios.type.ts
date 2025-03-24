export type IMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage?: number;
};

export type ResponseSuccessType = {
  success: boolean;
  data: any;
  meta?: IMeta;
  message?: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  errorMessages?: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
