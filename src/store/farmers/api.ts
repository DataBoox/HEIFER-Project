import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddFarmerPayload, ChurchFarmersResponse, DeleteFarmersPayload, EditFarmerPayload, FetchFarmersPayload, RequiresFarmerID, FarmerSuccessResponse, AssignInterventionPayload } from './interface';


export const farmerApi = createApi({
    reducerPath: 'farmerApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getFarmers: builder.query<ChurchFarmersResponse, FetchFarmersPayload>({
            query: (payload) => ({
                url: `projects/farmers?${convertObjectToURLParams(payload)}`,
                method: 'POST',
                body: payload
            }),
        }),
        fetchFarmers: builder.mutation<ChurchFarmersResponse, FetchFarmersPayload>({
            query: (payload) => ({
                url: `projects/farmers`,
                method: 'POST',
                body: payload
            }),
        }),
        addFarmer: builder.mutation<FarmerSuccessResponse, AddFarmerPayload>({
            query: (payload) => ({
                url: 'projects/farmers/create',
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
        assignIntervention: builder.mutation<IResponse, AssignInterventionPayload>({
            query: (payload) => ({
                url: 'projects/farmers/interventions/assign',
                method: 'POST',
                body: payload
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
    useAssignInterventionMutation,
} = farmerApi;

