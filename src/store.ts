import { configureStore } from '@reduxjs/toolkit';
import { currencyApi } from './services/currencyApi';

export const store = configureStore({
    reducer: {
        [currencyApi.reducerPath]: currencyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(currencyApi.middleware),
});

export const setupStore = () => {
    return configureStore({
        reducer: {
            [currencyApi.reducerPath]: currencyApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(currencyApi.middleware),
    });
};

// Typy dla testów
export type RootState = ReturnType<ReturnType<typeof setupStore>['getState']>;
export type AppDispatch = ReturnType<typeof setupStore>['dispatch'];
