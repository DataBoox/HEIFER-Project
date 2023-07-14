import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddReportPayload, ChurchReportsResponse, DeleteReportsPayload, EditReportPayload, FetchReportsPayload, AssignInterventionPayload, ReportSuccessResponse, AssignFarmerPayload } from './interface';


export const reportApi = createApi({
    reducerPath: 'reportApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getReports: builder.query<ChurchReportsResponse, FetchReportsPayload>({
            query: (payload) => ({
                url: `projects/reports?${convertObjectToURLParams(payload)}`,
                method: 'POST',
                body: payload
            }),
        }),
        fetchReports: builder.mutation<ChurchReportsResponse, FetchReportsPayload>({
            query: (payload) => ({
                url: `projects/reports?${convertObjectToURLParams(payload)}`,
                method: 'GET',
                body: payload
            }),
        }),
        addReport: builder.mutation<ReportSuccessResponse, AddReportPayload>({
            query: (payload) => ({
                url: 'projects/reports/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editReport: builder.mutation<IResponse, EditReportPayload>({
            query: (payload) => ({
                url: 'projects/reports/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteReport: builder.mutation<IResponse, DeleteReportsPayload>({
            query: (payload) => ({
                url: 'projects/reports/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getReportInfo: builder.query<IResponse, { project_id: number, Report_id: number|string }>({
            query: (payload) => ({
                url: `projects/reports/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
        assignIntervention: builder.mutation<IResponse, AssignInterventionPayload>({
            query: (payload) => ({
                url: 'projects/reports/interventions/assign',
                method: 'POST',
                body: payload
            }),
        }),
        assignFarmer: builder.mutation<IResponse, AssignFarmerPayload>({
            query: (payload) => ({
                url: 'projects/reports/farmers/assign',
                method: 'POST',
                body: payload
            }),
        }),
    })
});

export const {
    useGetReportsQuery,
    useFetchReportsMutation,
    useAddReportMutation,
    useEditReportMutation,
    useDeleteReportMutation,
    useGetReportInfoQuery,
    useAssignInterventionMutation,
    useAssignFarmerMutation,
} = reportApi;

