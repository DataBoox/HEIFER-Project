import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddProfilePayload, ChurchProfileResponse, DeleteProfilePayload, EditProfilePayload, FetchProfilePayload, RequiresProfileID, ProfileSuccessResponse } from './interface';


export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getProfile: builder.query<ChurchProfileResponse, FetchProfilePayload>({
            query: (payload) => ({
                url: `profile`,
                method: 'POST',
                body: payload
            }), 
        }),
        fetchProfile: builder.mutation<ChurchProfileResponse, FetchProfilePayload>({
            query: (payload) => ({
                url: `profile`,
                method: 'POST',
                body: payload
            }),
        }),
        addProfile: builder.mutation<ProfileSuccessResponse, AddProfilePayload>({
            query: (payload) => ({
                url: 'profile/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editProfile: builder.mutation<IResponse, EditProfilePayload>({
            query: (payload) => ({
                url: 'profile/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteProfile: builder.mutation<IResponse, DeleteProfilePayload>({
            query: (payload) => ({
                url: 'profile/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getProfileInfo: builder.query<IResponse, { pid: string|number }>({
            query: (payload) => ({
                url: `profile/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetProfileQuery,
    useFetchProfileMutation,
    useAddProfileMutation,
    useEditProfileMutation,
    useDeleteProfileMutation,
    useGetProfileInfoQuery,
} = profileApi;

