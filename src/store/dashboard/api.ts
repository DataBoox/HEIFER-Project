import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { ChurchDashboardStatisticsResponse } from './interface';


export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getDashboardStatistics: builder.query<ChurchDashboardStatisticsResponse, void>({
            query: () => ({
                url: `projects/dashboard`,
                method: 'GET',
            }),
        }),
       
    })
});

export const {
    useGetDashboardStatisticsQuery
} = dashboardApi;

