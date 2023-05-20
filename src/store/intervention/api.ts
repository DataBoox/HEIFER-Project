import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddInterventionPayload, ChurchInterventionsResponse, DeleteInterventionsPayload, EditInterventionPayload, FetchInterventionsPayload, RequiresInterventionID, InterventionSuccessResponse } from './interface';


export const interventionApi = createApi({
    reducerPath: 'interventionApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getInterventions: builder.query<ChurchInterventionsResponse, FetchInterventionsPayload>({
            query: (payload) => ({
                url: `interventions?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        fetchInterventions: builder.mutation<ChurchInterventionsResponse, FetchInterventionsPayload>({
            query: (payload) => ({
                url: `interventions?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        addIntervention: builder.mutation<InterventionSuccessResponse, AddInterventionPayload>({
            query: (payload) => ({
                url: 'interventions/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editIntervention: builder.mutation<IResponse, EditInterventionPayload>({
            query: (payload) => ({
                url: 'interventions/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteIntervention: builder.mutation<IResponse, DeleteInterventionsPayload>({
            query: (payload) => ({
                url: 'interventions/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getInterventionInfo: builder.query<IResponse, RequiresInterventionID>({
            query: (payload) => ({
                url: `interventions/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetInterventionsQuery,
    useFetchInterventionsMutation,
    useAddInterventionMutation,
    useEditInterventionMutation,
    useDeleteInterventionMutation,
    useGetInterventionInfoQuery,
} = interventionApi;

