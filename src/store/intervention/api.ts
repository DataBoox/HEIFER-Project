import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddInterventionPayload, ChurchInterventionsResponse, DeleteInterventionsPayload, EditInterventionPayload, FetchInterventionsPayload, AssignInterventionPayload, InterventionSuccessResponse } from './interface';


export const interventionApi = createApi({
    reducerPath: 'interventionApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getInterventions: builder.query<ChurchInterventionsResponse, FetchInterventionsPayload>({
            query: (payload) => ({
                url: `projects/interventions?${convertObjectToURLParams(payload)}`,
                method: 'POST',
                body: payload
            }),
        }),
        fetchInterventions: builder.mutation<ChurchInterventionsResponse, FetchInterventionsPayload>({
            query: (payload) => ({
                url: `projects/interventions?${convertObjectToURLParams(payload)}`,
                method: 'POST',
                body: payload
            }),
        }),
        addIntervention: builder.mutation<InterventionSuccessResponse, AddInterventionPayload>({
            query: (payload) => ({
                url: 'projects/interventions/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editIntervention: builder.mutation<IResponse, EditInterventionPayload>({
            query: (payload) => ({
                url: 'projects/interventions/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteIntervention: builder.mutation<IResponse, DeleteInterventionsPayload>({
            query: (payload) => ({
                url: 'projects/interventions/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getInterventionInfo: builder.query<IResponse, { project_id: number, intervention_id: number|string }>({
            query: (payload) => ({
                url: `projects/interventions/info?${convertObjectToURLParams(payload)}`,
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
    useGetInterventionsQuery,
    useFetchInterventionsMutation,
    useAddInterventionMutation,
    useEditInterventionMutation,
    useDeleteInterventionMutation,
    useGetInterventionInfoQuery,
    useAssignInterventionMutation,
} = interventionApi;

