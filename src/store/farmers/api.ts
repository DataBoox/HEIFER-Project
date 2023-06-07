import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddFarmerPayload, ChurchFarmersResponse, DeleteFarmersPayload, EditFarmerPayload, FetchFarmersPayload, RequiresFarmerID, FarmerSuccessResponse } from './interface';


export const farmerApi = createApi({
    reducerPath: 'farmerApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getFarmers: builder.query<ChurchFarmersResponse, FetchFarmersPayload>({
            query: (payload) => ({
                url: `projects/farmers?project_id=${payload.project_id}`,
                method: 'GET',
                body: payload
            }),
        }),
        addFarmer: builder.mutation<FarmerSuccessResponse, AddFarmerPayload>({
            query: (payload) => ({
                url: 'projects/farmers/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editFarmer: builder.mutation<IResponse, EditFarmerPayload>({
            query: (payload) => ({
                url: 'projects/farmers/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteFarmer: builder.mutation<IResponse, DeleteFarmersPayload>({
            query: (payload) => ({
                url: 'projects/farmers/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getFarmerInfo: builder.query<IResponse, RequiresFarmerID>({
            query: (payload) => ({
                url: `projects/farmers/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetFarmersQuery,
    useAddFarmerMutation,
    useEditFarmerMutation,
    useDeleteFarmerMutation,
    useGetFarmerInfoQuery,
} = farmerApi;

