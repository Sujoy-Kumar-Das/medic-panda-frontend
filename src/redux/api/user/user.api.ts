import { TTagTypes } from "@/redux/tag-types";
import { baseApi } from "../base.api";
import {
  confirmEmailVerificationOTP,
  sentEmailVerificationOTP,
  updateUserEmailMutation,
  updateUserInfoMutation,
} from "./mutation";
import { getMeQuery } from "./query";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: getMeQuery,
      providesTags: [TTagTypes.user],
    }),

    updateUserEmail: builder.mutation({
      query: updateUserEmailMutation,
      invalidatesTags: [TTagTypes.user],
    }),

    emailVerificationOTPSent: builder.mutation({
      query: sentEmailVerificationOTP,
      invalidatesTags: [TTagTypes.user],
    }),

    confirmUserOTP: builder.mutation({
      query: confirmEmailVerificationOTP,
      invalidatesTags: [TTagTypes.user],
    }),

    updateUserInfo: builder.mutation({
      query: updateUserInfoMutation,
      invalidatesTags: [TTagTypes.user],
    }),
  }),
});

export const {
  useUpdateUserEmailMutation,
  useGetMeQuery,
  useEmailVerificationOTPSentMutation,
  useConfirmUserOTPMutation,
  useUpdateUserInfoMutation,
} = userApi;
