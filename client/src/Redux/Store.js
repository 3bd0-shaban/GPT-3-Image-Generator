import { setupListeners } from "@reduxjs/toolkit/query"
import { configureStore } from '@reduxjs/toolkit'
import UserSlice from "./Slices/UserSlice";
import { apiSlice } from './ApiSlice';
import DataSlice from "./Slices/DataSlice";
export const Store = configureStore({
    reducer: {
        auth: UserSlice,
        Data: DataSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        apiSlice.middleware),
    devTools: process.env.REACT_APP_NODE_ENV === "production" ? true : false
});
setupListeners(Store.dispatch)

