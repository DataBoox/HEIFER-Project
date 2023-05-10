import { createApi } from '@reduxjs/toolkit/query/react';
import { PaginatedPayload } from '@store/interface';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddUploadPayload, ChurchUploadsResponse, DeleteUploadsPayload, EditUploadPayload, FetchUploadsPayload, RequiresUploadID, UploadInfoResponse, UploadSuccessResponse } from './interface';


export const uploadApi = createApi({
    reducerPath: 'uploadApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getUploads: builder.query<ChurchUploadsResponse, FetchUploadsPayload>({
            query: (payload) => ({
                url: `uploads?${convertObjectToURLParams(payload)}`,
                method: 'POST',
                body: payload
            }),
        }),
        fetchUploads: builder.mutation<ChurchUploadsResponse, FetchUploadsPayload>({
            query: (payload) => ({
                url: `uploads?${convertObjectToURLParams(payload)}`,
                method: 'POST',
                body: payload
            }),
        }),
        addUpload: builder.mutation<UploadSuccessResponse, FormData>({
            query: (payload) => ({
                url: 'uploads/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editUpload: builder.mutation<IResponse, EditUploadPayload>({
            query: (payload) => ({
                url: 'uploads/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteUpload: builder.mutation<IResponse, DeleteUploadsPayload>({
            query: (payload) => ({
                url: 'uploads/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getUploadInfo: builder.query<IResponse, RequiresUploadID>({
            query: (payload) => ({
                url: `uploads/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetUploadsQuery,
    useFetchUploadsMutation,
    useAddUploadMutation,
    useEditUploadMutation,
    useDeleteUploadMutation,
    useGetUploadInfoQuery,
} = uploadApi;

