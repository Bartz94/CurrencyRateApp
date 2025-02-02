import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';

import { Provider } from 'react-redux';

import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

import { setupStore } from '../store';
import HomePage from './HomePage';

const server = setupServer(
  http.get('https://api.frankfurters.dev/v1/latest', async () => {
    return HttpResponse.json({
      base: 'PLN',
      rates: {
        USD: 4.5,
        EUR: 4.3,
      },
    });
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const store = setupStore();

describe('HomePage Component', () => {
  it('renders loading state', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders error message on API failure', async () => {
    server.resetHandlers()
    server.close()
    server.use(
      http.get('https://api.frankfurter.dev/v1/latest', async () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Wystąpił błąd/i)).toBeInTheDocument();
    });
  });

  it('renders currency table when data is available', async () => {
    server.use(
      http.get('https://api.frankfurter.dev/v1/latest', async () => {
        return HttpResponse.json({
          base: 'PLN',
          rates: {
            USD: 4.5,
            EUR: 4.3,
          },
        });
      })
    );

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/USD/i)).toBeInTheDocument();
      expect(screen.getByText(/EUR/i)).toBeInTheDocument();
    });
  });

  it('shows history table when currency is selected', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Rates in relation to PLN')).toBeInTheDocument();
    });

    screen.getByText(/USD/i).click();

    await waitFor(() => {
      expect(screen.getByText(/History rates of USD/i)).toBeInTheDocument();
    });
  });
});

