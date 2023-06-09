import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddGroupPayload, ChurchGroupsResponse, DeleteGroupsPayload, EditGroupPayload, FetchGroupsPayload, AssignInterventionPayload, GroupSuccessResponse, AssignFarmerPayload } from './interface';


export const groupApi = createApi({
    reducerPath: 'groupApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getGroups: builder.query<ChurchGroupsResponse, FetchGroupsPayload>({
            query: (payload) => ({
                url: `projects/groups?${convertObjectToURLParams(payload)}`,
                method: 'POST',
                body: payload
            }),
        }),
        fetchGroups: builder.mutation<ChurchGroupsResponse, FetchGroupsPayload>({
            query: (payload) => ({
                url: `projects/groups?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        addGroup: builder.mutation<GroupSuccessResponse, AddGroupPayload>({
            query: (payload) => ({
                url: 'projects/groups/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editGroup: builder.mutation<IResponse, EditGroupPayload>({
            query: (payload) => ({
                url: 'projects/groups/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteGroup: builder.mutation<IResponse, DeleteGroupsPayload>({
            query: (payload) => ({
                url: 'projects/groups/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getGroupInfo: builder.query<IResponse, { project_id: number, group_id: number|string }>({
            query: (payload) => ({
                url: `projects/groups/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
        assignIntervention: builder.mutation<IResponse, AssignInterventionPayload>({
            query: (payload) => ({
                url: 'projects/groups/interventions/assign',
                method: 'POST',
                body: payload
            }),
        }),
        assignFarmer: builder.mutation<IResponse, AssignFarmerPayload>({
            query: (payload) => ({
                url: 'projects/groups/farmers/assign',
                method: 'POST',
                body: payload
            }),
        }),
    })
});

export const {
    useGetGroupsQuery,
    useFetchGroupsMutation,
    useAddGroupMutation,
    useEditGroupMutation,
    useDeleteGroupMutation,
    useGetGroupInfoQuery,
    useAssignInterventionMutation,
    useAssignFarmerMutation,
} = groupApi;

