export type CurrencyResponse = {
    amount: number;
    base: string;
    date: string;
    rates: ExchangeRates;
}

type ExchangeRates = {
    [currencyCode: string]: number;
};

export type HistoryRatesCurrencyResponse = {
    amount: number;
    base: string;
    date: string;
    rates: HistoryExchangeRates;
}

type HistoryExchangeRates = {
    [date: string]: ExchangeRates;
};
