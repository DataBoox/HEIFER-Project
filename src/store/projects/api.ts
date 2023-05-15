import { createApi } from '@reduxjs/toolkit/query/react';
import { PaginatedPayload } from '@store/interface';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddProjectPayload, ChurchProjectsResponse, DeleteProjectsPayload, EditProjectPayload, FetchProjectsPayload, RequiresProjectID, ProjectInfoResponse, ProjectSuccessResponse } from './interface';


export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getProjects: builder.query<ChurchProjectsResponse, FetchProjectsPayload>({
            query: (payload) => ({
                url: `projects?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        fetchProjects: builder.mutation<ChurchProjectsResponse, FetchProjectsPayload>({
            query: (payload) => ({
                url: `projects?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        addProject: builder.mutation<ProjectSuccessResponse, AddProjectPayload>({
            query: (payload) => ({
                url: 'projects/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editProject: builder.mutation<IResponse, EditProjectPayload>({
            query: (payload) => ({
                url: 'projects/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteProject: builder.mutation<IResponse, DeleteProjectsPayload>({
            query: (payload) => ({
                url: 'projects/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getProjectInfo: builder.query<IResponse, RequiresProjectID>({
            query: (payload) => ({
                url: `projects/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetProjectsQuery,
    useFetchProjectsMutation,
    useAddProjectMutation,
    useEditProjectMutation,
    useDeleteProjectMutation,
    useGetProjectInfoQuery,
} = projectApi;

