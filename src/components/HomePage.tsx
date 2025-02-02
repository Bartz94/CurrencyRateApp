import { useState } from 'react';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { useGetCurrenciesQuery } from '../services/currencyApi';
import CurrencyTable from '../components/CurrencyTable';
import HistoryTable from '../components/HistoryTable';

const HomePage = () => {
    const [selectedCurrency, setSelectedCurrency] = useState<string | null>('');
    const { data, error, isLoading } = useGetCurrenciesQuery('PLN');

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Wystąpił błąd</Typography>;

    return (
        <Container sx={{ gap: 5 }}>
            <Typography sx={{ mb: 3 }} variant="h2" textAlign="center">Currency Rate App</Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 5,
                    alignItems: { xs: 'center', md: 'flex-start' }
                }}
            >
                <Box sx={{ minWidth: '300px', width: '100%' }}>
                    <Typography sx={{ mb: 3 }} variant="h5" textAlign={"center"}>Rates in relation to PLN</Typography>
                    <CurrencyTable data={data?.rates ?? {}} onCurrencySelect={setSelectedCurrency} />
                </Box>
                {selectedCurrency ? (
                    <Box sx={{ minWidth: '300px', width: '100%' }}>
                        <Typography sx={{ mb: 3 }} variant="h5" textAlign={"center"}>History rates of {selectedCurrency}</Typography>
                        <HistoryTable currency={selectedCurrency} />
                    </Box>
                ) : (
                    <Box sx={{ minWidth: '300px', width: '100%' }}>
                        <Typography sx={{ mb: 3 }} variant="h5" textAlign={"center"}>History rates {selectedCurrency ? `of ${selectedCurrency}` : ''}</Typography>
                        <Typography sx={{ mb: 3 }} textAlign="center">Select currency to see history</Typography>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default HomePage;