import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, Container, ratingClasses } from '@mui/material';
import { useGetCurrencyHistoryQuery } from '../services/currencyApi';

interface HistoryTableProps {
    currency: string;
}

const HistoryTable = ({ currency }: HistoryTableProps) => {
    const { data, isLoading, error } = useGetCurrencyHistoryQuery('PLN');

    if (isLoading) {
        return (
            <Container
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress />
            </Container>
        );
    }
    if (error) {
        return (
            <Container
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography color="error">Wystąpił błąd</Typography>
            </Container>
        );
    }

    return (
        <TableContainer
            component={Paper}
            sx={{ maxHeight: '75vh', overflowY: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ textAlign: 'center', fontWeight: 900 }}>Date</TableCell>
                        <TableCell sx={{ textAlign: 'center', fontWeight: 900 }}>Rate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && Object.entries(data.rates).map(([date, rates]) => {
                        const rate = rates[currency];

                        console.log(ratingClasses)
                        return (
                            <TableRow key={date}>
                                <TableCell sx={{ textAlign: 'center' }}>{date}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>
                                    {rate ? rate.toFixed(3) : 'Brak danych'}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default HistoryTable;
