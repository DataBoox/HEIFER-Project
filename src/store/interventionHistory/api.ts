import { createApi } from '@reduxjs/toolkit/query/react';
import { convertObjectToURLParams } from 'utilities/general';
import { axiosBaseQuery } from '../../utilities/axiosQuery/axiosBaseQuery';
import { baseUrl } from '../../utilities/requests';
import { IResponse } from '../auth/interface';
import { AddHistoryPayload, ChurchHistorysResponse, DeleteHistorysPayload, EditHistoryPayload, FetchHistorysPayload, RequiresHistoryID, HistorySuccessResponse } from './interface';


export const historyApi = createApi({
    reducerPath: 'historyApi',
    baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/` }),
    tagTypes: ['myProfile'],
    endpoints: (builder) => ({
        getHistorys: builder.query<ChurchHistorysResponse, FetchHistorysPayload>({
  query: (payload) => ({
    url: `projects/history?project_id=${payload.project_id}`,
    method: 'GET',
    body: payload
  }),
}),
fetchHistorys: builder.mutation<ChurchHistorysResponse, FetchHistorysPayload>({
  query: (payload) => ({
    url: `projects/history?project_id=${payload.project_id}`,
    method: 'GET',
    body: payload
  }),
}),

        addHistory: builder.mutation<HistorySuccessResponse, AddHistoryPayload>({
            query: (payload) => ({
                url: 'projects/history/create',
                headers: { 'Content-Type': 'multipart/form-data'},
                method: 'POST',
                body: payload
            }),
        }),
        editHistory: builder.mutation<IResponse, EditHistoryPayload>({
            query: (payload) => ({
                url: 'projects/history/edit',
                method: 'POST',
                body: payload
            }),
        }),
        deleteHistory: builder.mutation<IResponse, DeleteHistorysPayload>({
            query: (payload) => ({
                url: 'projects/history/remove',
                method: 'POST',
                body: payload
            }),
        }),
        getHistoryInfo: builder.query<IResponse, RequiresHistoryID>({
            query: (payload) => ({
                url: `projects/history/info?${convertObjectToURLParams(payload)}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useGetHistorysQuery,
    useFetchHistorysMutation,
    useAddHistoryMutation,
    useEditHistoryMutation,
    useDeleteHistoryMutation,
    useGetHistoryInfoQuery,
} = historyApi;

