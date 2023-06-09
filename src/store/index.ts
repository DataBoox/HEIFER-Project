import { dashboardApi } from "./dashboard";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import { authApi } from './auth/api';
import { userApi } from "./user/api";
import { groupApi } from "./group/api";
import { shgApi } from "./shg/api";
import { historyApi } from "./interventionHistory/api";
import { farmerApi } from "./farmers/api";
import { uploadApi } from './uploads';
import { projectApi } from './projects';
import { profileApi } from './profile';
import { interventionApi } from './intervention';
import { reportApi } from './reports';


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [groupApi.reducerPath]: groupApi.reducer,
        [shgApi.reducerPath]: shgApi.reducer,
        [historyApi.reducerPath]: historyApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
        [interventionApi.reducerPath]: interventionApi.reducer,
        [reportApi.reducerPath]: reportApi.reducer,
        [farmerApi.reducerPath]: farmerApi.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(
            authApi.middleware,
            userApi.middleware,
            groupApi.middleware,
            shgApi.middleware,
            uploadApi.middleware,
            historyApi.middleware,
            projectApi.middleware,
            profileApi.middleware,
            interventionApi.middleware,
            reportApi.middleware,
            farmerApi.middleware,
            dashboardApi.middleware,
        )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
