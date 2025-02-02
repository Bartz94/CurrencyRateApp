import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CurrencyResponse, HistoryRatesCurrencyResponse } from "../types";

export const currencyApi = createApi({
    reducerPath: "currencyApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.frankfurter.dev/v1/latest" }),
    endpoints: (builder) => ({
        getCurrencies: builder.query({
            query: (currency) => `https://api.frankfurter.dev/v1/latest?base=${currency}`,
            transformResponse: (response: CurrencyResponse) => response,
        }),
        getCurrencyHistory: builder.query({
            query: (currency) => {
                const today = new Date();
                const todayStr = today.toISOString().split('T')[0];

                const lastMonday = new Date();
                lastMonday.setDate(today.getDate() - ((today.getDay() + 6) % 7) - 6);
                lastMonday.setDate(lastMonday.getDate() - 1);
                const lastMondayStr = lastMonday.toISOString().split('T')[0];

                return `https://api.frankfurter.dev/v1/${lastMondayStr}..${todayStr}?base=${currency}`;
            },
            transformResponse: (response: HistoryRatesCurrencyResponse) => response,
        }),
    }),
});

export const { useGetCurrenciesQuery, useGetCurrencyHistoryQuery } = currencyApi;
