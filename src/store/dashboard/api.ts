import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { DashboardStatisticsResponse } from './interface';
import { convertObjectToURLParams } from 'utilities/general';

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getDashboardStatistics: builder.query<DashboardStatisticsResponse, { project_id: number }>({
            query: (payload) => ({
                url: `projects/dashboard?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
       
    })
});

export const {
    useGetDashboardStatisticsQuery
} = dashboardApi;

