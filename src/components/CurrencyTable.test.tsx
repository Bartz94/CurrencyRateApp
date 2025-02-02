import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeAll, afterEach, afterAll, vi } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import CurrencyTable from './CurrencyTable';

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

const mockData = {
    USD: 4.5,
    EUR: 4.3,
};

const mockOnCurrencySelect = (currency: string) => {
    return currency;
};

describe('CurrencyTable Component', () => {

    it('renders table with correct data', async () => {
        render(<CurrencyTable data={mockData} onCurrencySelect={mockOnCurrencySelect} />);

        expect(screen.getByText('Currency')).toBeInTheDocument();
        expect(screen.getByText('Rate')).toBeInTheDocument();
        expect(screen.getByText('USD')).toBeInTheDocument();
        expect(screen.getByText('4.500')).toBeInTheDocument();
        expect(screen.getByText('EUR')).toBeInTheDocument();
        expect(screen.getByText('4.300')).toBeInTheDocument();
    });

    it('calls onCurrencySelect when a currency is clicked', async () => {
        const mockCurrencySelect = vi.fn();

        render(<CurrencyTable data={mockData} onCurrencySelect={mockCurrencySelect} />);

        fireEvent.click(screen.getByText('USD'));

        await waitFor(() => {
            expect(mockCurrencySelect).toHaveBeenCalledWith('USD');
        });
    });

    it('renders the table with correct currency formatting', async () => {
        render(<CurrencyTable data={mockData} onCurrencySelect={mockOnCurrencySelect} />);

        expect(screen.getByText('4.500')).toBeInTheDocument();
        expect(screen.getByText('4.300')).toBeInTheDocument();
    });
});
