import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import HistoryTable from './HistoryTable';
import { Provider } from 'react-redux';
import { store } from '../store';

// Konfiguracja serwera MSW 2.0
const server = setupServer(
    http.get('https://api.frankfurters.dev/v1/latest', async () => {
        return HttpResponse.json({
            rates: {
                '2025-01-01': { USD: 4.5, EUR: 4.3 },
                '2025-01-02': { USD: 4.6, EUR: 4.4 },
            },
        });
    })
);

// Start i reset serwera MSW przed i po testach
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('HistoryTable Component', () => {

    it('renders loading state', async () => {
        server.use(
            http.get('https://api.frankfurters.dev/v1/latest', async () => {
                return new HttpResponse(null, { status: 500 });
            })
        );

        render(
            <Provider store={store}>
                <HistoryTable currency="USD" />
            </Provider>
        );

        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('renders error message when there is an API error', async () => {
        server.use(
            http.get('https://api.frankfurters.dev/v1/latest', async () => {
                return new HttpResponse(null, { status: 500 });
            })
        );

        render(
            <Provider store={store}>
                <HistoryTable currency="USD" />
            </Provider>
        );

        await waitFor(() => {
            expect(screen.getByText(/Wystąpił błąd/i)).toBeInTheDocument();
        });
    });

    it('renders correct error message when API fails', async () => {
        server.use(
            http.get('https://api.frankfurters.dev/v1/latest', async () => {
                return new HttpResponse(null, { status: 500 });
            })
        );

        render(
            <Provider store={store}>
                <HistoryTable currency="USD" />
            </Provider>
        );

        await waitFor(() => {
            expect(screen.getByText(/Wystąpił błąd/i)).toBeInTheDocument();
        });
    });
});
