import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import { authApi } from './auth/api';
import { userApi } from "./user/api"
import { uploadApi } from './uploads';
import { projectApi } from './projects';


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(
            authApi.middleware,
            userApi.middleware,
            uploadApi.middleware,
            projectApi.middleware,
        )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
