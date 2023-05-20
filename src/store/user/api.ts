import { createApi } from '@reduxjs/toolkit/query/react';
import { PaginatedPayload } from '@store/interface';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddUserPayload, ChurchUsersResponse, DeleteUsersPayload, EditUserPayload, FetchUsersPayload, RequiresUserID, UserInfoResponse, UserSuccessResponse } from './interface';


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getUsers: builder.query<ChurchUsersResponse, FetchUsersPayload>({
            query: (payload) => ({
                url: `users?${convertObjectToURLParams(payload)}`,
                method: 'POST',
                body: payload
            }),
        }),
        fetchUsers: builder.mutation<ChurchUsersResponse, FetchUsersPayload>({
            query: (payload) => ({
                url: `users?${convertObjectToURLParams(payload)}`,
                method: 'POST',
                body: payload
            }),
        }),
        addUser: builder.mutation<UserSuccessResponse, AddUserPayload>({
            query: (payload) => ({
                url: 'users/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editUser: builder.mutation<IResponse, EditUserPayload>({
            query: (payload) => ({
                url: 'users/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteUser: builder.mutation<IResponse, DeleteUsersPayload>({
            query: (payload) => ({
                url: 'users/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getUserInfo: builder.query<IResponse, RequiresUserID>({
            query: (payload) => ({
                url: `users/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetUsersQuery,
    useFetchUsersMutation,
    useAddUserMutation,
    useEditUserMutation,
    useDeleteUserMutation,
    useGetUserInfoQuery,
} = userApi;

