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
                url: `farmers?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        fetchFarmers: builder.mutation<ChurchFarmersResponse, FetchFarmersPayload>({
            query: (payload) => ({
                url: `farmers?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        addFarmer: builder.mutation<FarmerSuccessResponse, AddFarmerPayload>({
            query: (payload) => ({
                url: 'farmers/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editFarmer: builder.mutation<IResponse, EditFarmerPayload>({
            query: (payload) => ({
                url: 'farmers/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteFarmer: builder.mutation<IResponse, DeleteFarmersPayload>({
            query: (payload) => ({
                url: 'farmers/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getFarmerInfo: builder.query<IResponse, RequiresFarmerID>({
            query: (payload) => ({
                url: `farmers/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetFarmersQuery,
    useFetchFarmersMutation,
    useAddFarmerMutation,
    useEditFarmerMutation,
    useDeleteFarmerMutation,
    useGetFarmerInfoQuery,
} = farmerApi;

