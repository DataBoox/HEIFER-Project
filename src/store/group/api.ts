import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddGroupPayload, ChurchGroupsResponse, DeleteGroupsPayload, EditGroupPayload, FetchGroupsPayload, RequiresGroupID, GroupSuccessResponse } from './interface';


export const groupApi = createApi({
    reducerPath: 'groupApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getGroups: builder.query<ChurchGroupsResponse, FetchGroupsPayload>({
            query: (payload) => ({
                url: `groups?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        fetchGroups: builder.mutation<ChurchGroupsResponse, FetchGroupsPayload>({
            query: (payload) => ({
                url: `groups?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        addGroup: builder.mutation<GroupSuccessResponse, AddGroupPayload>({
            query: (payload) => ({
                url: 'groups/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editGroup: builder.mutation<IResponse, EditGroupPayload>({
            query: (payload) => ({
                url: 'groups/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteGroup: builder.mutation<IResponse, DeleteGroupsPayload>({
            query: (payload) => ({
                url: 'groups/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getGroupInfo: builder.query<IResponse, RequiresGroupID>({
            query: (payload) => ({
                url: `groups/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
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
} = groupApi;

