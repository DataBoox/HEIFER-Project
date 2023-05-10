import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { AuthResponse, IResponse, LoginPayload, RegisterPayload, VerifyEmailPayload } from './interface';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginPayload>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials
            })
        }),
        register: builder.mutation<AuthResponse, RegisterPayload>({
            query: (credentials) => ({
                url: 'auth/register',
                method: 'POST',
                body: credentials
            })
        }),
        forgot: builder.mutation({
            query: (email) => ({
                url: `auth/password/forgot?email=${email}`,
                method: 'POST',
                body: { email: email }
            })
        }),
        checkSubDomain: builder.mutation<IResponse, string>({
            query: (domain) => ({
                url: 'auth/check-domain?domain=' + domain,
                method: 'GET',
                body: { domain }

            })
        }),
        verifyReset: builder.query<IResponse, string>({
            query: (token) => ({
                url: `auth/reset/verify/${token}`,
                method: 'GET',
            })
        }),
        reset: builder.mutation({
            query: (credentials) => ({
                url: 'auth/reset',
                method: 'POST',
                body: credentials
            })
        }),
        verifyEmailAddress: builder.mutation<IResponse, VerifyEmailPayload>({
            query: (credentials) => ({
                url: 'auth/verification/email',
                method: 'POST',
                body: credentials
            })
        }),
        resendVerifyLink: builder.mutation<IResponse, string>({
            query: (email) => ({
                url: 'auth/verification/email/resend?email=' + email,
                method: 'POST',
                body: { email: email }
            })
        }),
        refreshToken: builder.mutation<IResponse, void>({
            query: (credentials) => ({
                url: 'auth/token/refresh',
                method: 'GET',
                body: credentials
            })
        }),
        logOut: builder.mutation<IResponse, void>({
            query: (credentials) => ({
                url: 'auth/token/destroy',
                method: 'GET',
                body: credentials
            })
        })
    })
});


export const {
    useLoginMutation,
    useRegisterMutation,
    useForgotMutation,
    useResetMutation,
    useCheckSubDomainMutation,
    useVerifyResetQuery,
    useVerifyEmailAddressMutation,
    useResendVerifyLinkMutation,
    useLogOutMutation
} = authApi;

