import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import { authApi } from './auth/api';
import { userApi } from "./user/api";
import { groupApi } from "./group/api";
import { farmerApi } from "./farmers/api";
import { farmerformApi } from "./farmerForm/api";
import { uploadApi } from './uploads';
import { projectApi } from './projects';
import { interventionApi } from './intervention';


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [groupApi.reducerPath]: groupApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
        [interventionApi.reducerPath]: interventionApi.reducer,
        [farmerApi.reducerPath]: farmerApi.reducer,
        [farmerformApi.reducerPath]: farmerformApi.reducer,
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
            uploadApi.middleware,
            projectApi.middleware,
            interventionApi.middleware,
            farmerApi.middleware,
            farmerformApi.middleware,
        )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
