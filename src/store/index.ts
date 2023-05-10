import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import { authApi } from './auth/api';
import { userApi } from "./user/api"
import { uploadApi } from './uploads';


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
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
        )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
