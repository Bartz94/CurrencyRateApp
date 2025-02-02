import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CurrencyResponse, HistoryRatesCurrencyResponse } from "../types";
import { getTodayStr, getLastMondayStr } from "../utils/dateUtils";

const BASE_URL = 'https://api.frankfurter.dev/v1'

export const currencyApi = createApi({
    reducerPath: "currencyApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
    endpoints: (builder) => ({
        getCurrencies: builder.query({
            query: (currency) => `${BASE_URL}/latest?base=${currency}`,
            transformResponse: (response: CurrencyResponse) => response,
        }),
        getCurrencyHistory: builder.query({
            query: (currency) => {
                const todayStr = getTodayStr();
                const lastMondayStr = getLastMondayStr();

                return `${BASE_URL}/${lastMondayStr}..${todayStr}?base=${currency}`;
            },
            transformResponse: (response: HistoryRatesCurrencyResponse) => response,
        })
    }),
});

export const { useGetCurrenciesQuery, useGetCurrencyHistoryQuery } = currencyApi;
