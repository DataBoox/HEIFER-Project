import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { ColorThemeResponse, ConnectionsResponse, EditProfileDetailsPayload, ExchangeContactPayload, FetchProfileResponse, UpdateColorThemePayload, UpdatePasswordPayload, UpdateSocialsPayload, VerifyTransactionPayload } from './interface';


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        updateProfile: builder.mutation<IResponse, EditProfileDetailsPayload>({
            query: (credentials) => ({
                url: 'user/profile/update',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['myProfile']
        }),
        updateSocials: builder.mutation<IResponse, UpdateSocialsPayload>({
            query: (credentials) => ({
                url: 'user/socials/update',
                method: 'POST',
                body: credentials
            }),
            extraOptions: { maxRetries: 0 },
            invalidatesTags: ['myProfile']
        }),
        updatePassword: builder.mutation<IResponse, UpdatePasswordPayload>({
            query: (credentials) => ({
                url: 'user/password/update',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['myProfile']
        }),
        updateCompany: builder.mutation<IResponse, FormData>({
            query: (credentials) => ({
                url: 'user/company/update',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['myProfile']
        }),
        uploadImage: builder.mutation<IResponse, FormData>({
            query: (credentials) => ({
                url: 'user/image/upload',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['myProfile']
        }),
        deleteImage: builder.mutation<IResponse, {image:string}>({
            query: (credentials) => ({
                url: 'user/image/delete',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['myProfile']
        }),
        updateColorTheme: builder.mutation<IResponse, UpdateColorThemePayload>({
            query: (credentials) => ({
                url: 'user/colortheme/update',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['myProfile']
        }),
        fetchColorTheme: builder.query<ColorThemeResponse, void>({
            query: (credentials) => ({
                url: 'user/colortheme',
                method: 'GET',
                body: credentials
            })
        }),
        fetchProfile: builder.query<FetchProfileResponse, string|void>({
            query: (payload) => ({
                url: `profile/${payload}`,
                method: 'GET',
                body: payload
            }),
            providesTags: ['myProfile']
        }),
        fetchConnections: builder.query<ConnectionsResponse, void>({
            query: (payload) => ({
                url: `user/connection`,
                method: 'GET',
                body: payload
            })
        }),
        exchangeContact: builder.mutation<IResponse, ExchangeContactPayload>({
            query: (credentials) => ({
                url: 'profile/contact/exchange',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['myProfile']
        }),
        verifyTransaction: builder.mutation<IResponse, VerifyTransactionPayload>({
            query: (credentials) => ({
                url: 'transaction/verify',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['myProfile']
        }),
    })
});

export const {
   useUpdateProfileMutation,
   useUpdateCompanyMutation,
   useUpdatePasswordMutation,
   useUpdateSocialsMutation,
   useUploadImageMutation,
   useDeleteImageMutation,
   useUpdateColorThemeMutation,
   useExchangeContactMutation,
   useFetchColorThemeQuery,
   useFetchProfileQuery,
   useVerifyTransactionMutation,
   useFetchConnectionsQuery
} = userApi;

    