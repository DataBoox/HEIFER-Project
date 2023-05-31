import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddFarmerformPayload, ChurchFarmerformsResponse, DeleteFarmerformsPayload, EditFarmerformPayload, FarmerformSuccessResponse, FetchFarmerformsPayload, RequiresFarmerformID } from './interface';


export const farmerformApi = createApi({
    reducerPath: 'farmerformApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getFarmerforms: builder.query<ChurchFarmerformsResponse, FetchFarmerformsPayload>({
            query: (payload) => ({
                url: `farmersform?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        fetchFarmerforms: builder.mutation<ChurchFarmerformsResponse, FetchFarmerformsPayload>({
            query: (payload) => ({
                url: `farmersform?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        addFarmerform: builder.mutation<FarmerformSuccessResponse, AddFarmerformPayload>({
            query: (payload) => ({
                url: 'farmers-form/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editFarmerform: builder.mutation<IResponse, EditFarmerformPayload>({
            query: (payload) => ({
                url: 'farmers-form/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteFarmerform: builder.mutation<IResponse, DeleteFarmerformsPayload>({
            query: (payload) => ({
                url: 'farmers-form/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getFarmerInfo: builder.query<IResponse, RequiresFarmerformID>({
            query: (payload) => ({
                url: `farmers-form/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetFarmerformsQuery,
    useFetchFarmerformsMutation,
    useAddFarmerformMutation,
    useEditFarmerformMutation,
    useDeleteFarmerformMutation,
    useGetFarmerInfoQuery,
} = farmerformApi;

