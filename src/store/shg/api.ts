import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddShgPayload, ChurchShgsResponse, DeleteShgsPayload, EditShgPayload, FetchShgsPayload, RequiresShgID, ShgSuccessResponse } from './interface';


export const shgApi = createApi({
    reducerPath: 'shgApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getShgs: builder.query<ChurchShgsResponse, FetchShgsPayload>({
            query: (payload) => ({
                url: `projects/shg?project_id=${payload.project_id}`,
                method: 'GET',
                body: payload
            }),
        }),
        fetchShgs: builder.mutation<ChurchShgsResponse, FetchShgsPayload>({
            query: (payload) => ({
                url: `projects/shg?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        addShg: builder.mutation<ShgSuccessResponse, AddShgPayload>({
            query: (payload) => ({
                url: 'projects/shg/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editShg: builder.mutation<IResponse, EditShgPayload>({
            query: (payload) => ({
                url: 'projects/shg/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteShg: builder.mutation<IResponse, DeleteShgsPayload>({
            query: (payload) => ({
                url: 'projects/shg/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getShgInfo: builder.query<IResponse, RequiresShgID>({
            query: (payload) => ({
                url: `projects/shg/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetShgsQuery,
    useFetchShgsMutation,
    useAddShgMutation,
    useEditShgMutation,
    useDeleteShgMutation,
    useGetShgInfoQuery,
} = shgApi;

